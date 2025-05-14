
import {
    SiJavascript, SiTypescript, SiPython, SiPostgresql,
    SiReact, SiNextdotjs, SiExpress, SiNodedotjs,
    SiTailwindcss, SiBootstrap, SiRedux,
    SiMongodb, SiMysql,
    SiDocker,
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
    SiAwsamplify,
    SiAmazonec2,
} from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'
import { PiFileCppFill } from 'react-icons/pi'
export const skillCategories = [
    {
        title: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Dart',],
        icons: [
            <SiTypescript key={0} className="text-blue-400" size={16} />,
            <SiJavascript key={1} className="text-yellow-400" size={16} />,
            <SiPython key={2} className="text-blue-500" size={16} />,
            <PiFileCppFill key={3} className="text-blue-400" size={16} />,
            <SiDart key={4} className="text-blue-400" size={16} />,
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
            <SiReact key={5} className="text-blue-500" size={16} />,
            <SiNextdotjs key={6} className="text-gray-800 dark:text-white" size={16} />,
            <SiExpress key={7} className="text-gray-800 dark:text-white" size={16} />,
            <SiNodedotjs key={8} className="text-green-600" size={16} />,
            <SiFlutter key={9} className="text-blue-400" size={16} />,
            <SiTailwindcss key={10} className="text-cyan-500" size={16} />,
            <SiBootstrap key={11} className="text-purple-600" size={16} />,
            <DiMaterializecss key={12} className="text-red-500" size={16} />,
            <SiReact key={13} className="text-blue-500" size={16} />,
            <SiRedux key={14} className="text-purple-700" size={16} />,
            <SiFramer key={15} className="text-black dark:text-white" size={16} />,
            <SiNumpy key={16} className="text-blue-700" size={16} />,
            <SiPandas key={17} className="text-gray-800 dark:text-white" size={16} />
        ]
    },
    {
        title: 'Databases & Tools',
        skills: ['MongoDB', 'Postgres', 'MySQL', 'Postman', 'Firebase', 'Vercel', 'Netlify', 'Android Studio', 'Git', 'GitHub', 'Docker', 'AWS', 'Linux'],
        icons: [
            <SiMongodb key={18} className="text-green-500" size={16} />,
            <SiPostgresql key={19} className="text-blue-400" size={16} />,
            <SiMysql key={20} className="text-blue-500" size={16} />,
            <SiPostman key={21} className="text-red-500" size={16} />,
            <SiFirebase key={22} className="text-yellow-500" size={16} />,
            <SiVercel key={23} className="text-black dark:text-white" size={16} />,
            <SiNetlify key={24} className="text-blue-500" size={16} />,
            <SiAndroidstudio key={25} className="text-green-500" size={16} />,
            <SiGit key={26} className="text-red-500" size={16} />,
            <SiGithub key={27} className="text-black dark:text-white" size={16} />,
            <SiDocker key={28} className="text-blue-400" size={16} />,
            <SiAwsamplify key={29} className="text-yellow-500" size={16} />,
            <SiAmazonec2 key={30} className="text-yellow-500" size={16} />,
            <SiLinux key={31} className="text-black dark:text-white" size={16} />,
        ]
    },
]