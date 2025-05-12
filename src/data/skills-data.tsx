
import {
    SiJavascript, SiTypescript, SiPython, SiPostgresql,
    SiReact, SiNextdotjs, SiExpress, SiFastapi, SiNodedotjs,
    SiTailwindcss, SiBootstrap, SiCypress, SiGraphql, SiRedux,
    SiMongodb, SiMysql, SiPrisma, SiGithubactions, SiServerless,
    SiDocker, SiMapbox, SiJest, SiRedis,
    SiAlchemy, SiAmazonec2,
    SiAwsamplify,
    SiDart,
    SiFlutter,
    SiPandas,
    SiNumpy,
    SiFramer,
    SiPostman,
    SiGit,
    SiAndroidstudio,
    SiNetlify,
    SiVercel,
    SiFirebase,
    SiGithub,
    SiLinux,
} from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'
import { VscAzure } from 'react-icons/vsc'
import { PiFileCppFill } from 'react-icons/pi'
export const skillCategories = [
    {
        title: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Dart',],
        icons: [
            <SiTypescript className="text-blue-400" size={16} />,
            <SiJavascript className="text-yellow-400" size={16} />,
            <SiPython className="text-blue-500" size={16} />,
            <PiFileCppFill className="text-blue-400" size={16} />,
            <SiDart className="text-blue-400" size={16} />,
        ]
    },
    {
        title: 'Libraries & Frameworks',
        skills: [
            'React', 'Next.js', 'Express', 'Node.js', 'Flutter',
            'Tailwind CSS', 'Bootstrap', 'Material UI',
            'React Query', 'Redux/Toolkit', 'Framer Motion', 'Numpy', 'Pandas'
        ],
        icons: [
            <SiReact className="text-blue-500" size={16} />,
            <SiNextdotjs className="text-gray-800 dark:text-white" size={16} />,
            <SiExpress className="text-gray-800 dark:text-white" size={16} />,
            <SiNodedotjs className="text-green-600" size={16} />,
            <SiFlutter className="text-blue-400" size={16} />,
            <SiTailwindcss className="text-cyan-500" size={16} />,
            <SiBootstrap className="text-purple-600" size={16} />,
            <DiMaterializecss className="text-red-500" size={16} />,
            <SiReact className="text-blue-500" size={16} />,
            <SiRedux className="text-purple-700" size={16} />,
            <SiFramer className="text-black dark:text-white" size={16} />,
            <SiNumpy className="text-blue-700" size={16} />,
            <SiPandas className="text-gray-800 dark:text-white" size={16} />
        ]
    },
    {
        title: 'Databases & Tools',
        skills: ['MongoDB', 'Postgres', 'MySQL', 'Postman', 'Firebase', 'Vercel', 'Netlify', 'Android Studio', 'Git', 'GitHub', 'Docker', 'AWS', 'Linux'],
        icons: [
            <SiMongodb className="text-green-500" size={16} />,
            <SiPostgresql className="text-blue-400" size={16} />,
            <SiMysql className="text-blue-500" size={16} />,
            <SiPostman className="text-red-500" size={16} />,
            <SiFirebase className="text-yellow-500" size={16} />,
            <SiVercel className="text-black dark:text-white" size={16} />,
            <SiNetlify className="text-blue-500" size={16} />,
            <SiAndroidstudio className="text-green-500" size={16} />,
            <SiGit className="text-red-500" size={16} />,
            <SiGithub className="text-black dark:text-white" size={16} />,
            <SiDocker className="text-blue-400" size={16} />,
            <SiAwsamplify className="text-yellow-500" size={16} />,
            <SiAmazonec2 className="text-yellow-500" size={16} />,
            <SiLinux className="text-black dark:text-white" size={16} />,
        ]
    },
]