import type { GitHubContributions } from '@/types/github-types';


export async function fetchGitHubContributions(
  username: string,
  year?: number
): Promise<GitHubContributions> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (!token) {
    throw new Error('GitHub token not configured');
  }

  // Default to current year if not specified
  const targetYear = year || new Date().getFullYear();
  const from = `${targetYear}-01-01T00:00:00Z`;
  const to = `${targetYear}-12-31T23:59:59Z`;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const body = {
    query: `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  weekday
                }
              }
            }
            startedAt
            endedAt
          }
        }
      }
    `,
    variables: {
      username,
      from,
      to,
    },
  };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(errors.map((e: Error) => e.message).join('\n'));
    }

    return {
      year: targetYear,
      collection: data.user.contributionsCollection,
    };
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    throw error;
  }
}

export async function fetchMultipleYearsContributions(
  username: string,
  years: number[]
): Promise<GitHubContributions[]> {
  return Promise.all(
    years.map(year => fetchGitHubContributions(username, year))
  );
}