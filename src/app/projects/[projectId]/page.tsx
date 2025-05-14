import ProjectDetailsPage from '@/components/home/projects/page/project-details-page'

type ProjectPageProps = {
    params: {
        projectId: string
    }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    return <ProjectDetailsPage projectId={params.projectId} />
}