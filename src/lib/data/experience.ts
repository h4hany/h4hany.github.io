import Assets from './assets';
import {getSkills} from './skills';
import {ContractType, type Experience} from '../types';

export const items: Array<Experience> = [
    {
        slug: 'senior-software-engineer-kin',
        company: 'Andela - Kinship',
        description: 'Creating awesome tools for developers.',
        contract: ContractType.Contract,
        type: 'Software Development',
        location: 'US',
        period: {from: new Date(2022, 3)},
        skills: getSkills('ts', 'js', 'ror', 'react', 'css', 'html', 'angular', 'jira', 'git', 'aws', 'docker', 'postgresql', 'sass'),
        name: 'Senior Software Engineer ( Remotely )',
        color: 'red',
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Creating awesome tools for developers.',
        jobDescription: ['Tackled complex technical issues in PostgreSQL and Ruby on Rails, optimizing queries to improve\n' +
        'system performance by 40%.', 'Led development of a scalable application infrastructure using Angular Dart and React Native,\n' +
        'ensuring optimal user experience.', 'Applied problem-solving skills to debug and resolve issues with deployment pipelines, improving\n' +
        'delivery timelines and minimizing downtimes.', 'Collaborated with cross-functional teams to design a modular application architecture, reducing\n' +
        'future feature development time by 30%.', 'Design, implement, and optimize database structures and queries using PostgreSQL for efficient\n' +
        'data management.', 'Integrated external APIs, achieving 99.9% uptime in data exchange processes.']
    },
    {
        slug: 'senior-software-engineer-litmus',
        company: 'Andela - Litmus',
        description: 'Creating awesome applications for customers.',
        contract: ContractType.Contract,
        type: 'Software Development',
        location: 'US',
        period: {from: new Date(2021, 2), to: new Date(2022, 3)},
        skills: getSkills('vue', 'ts', 'sass', 'css', 'html', 'js', "ror", 'jira', 'git', 'aws', 'docker', 'mysql'),
        name: 'Senior Software Engineer ( Remotely )',
        color: 'blue',
        links: [],
        logo: Assets.Unknown,
        jobDescription: ['Designed and enforced solutions to improve Vue.js, Ember.js, and Ruby on Rails application\n' +
        'performance, reducing load times by 25%.', 'Led team efforts in developing new features and enhancing application robustness by solving\n' +
        'complex integration issues.', 'Utilized problem-solving techniques to overcome integration challenges with external APIs,\n' +
        'ensuring seamless data exchange.', 'Developed custom tools to automate common tasks, reducing manual errors and improving team\n' +
        'efficiency by 30%.', 'Debugged and resolved critical issues in deployment pipelines, improving delivery timelines by 15%\n' +
        'and reducing downtime by 20%.'],
        shortDescription: 'Creating awesome applications for customers.'
    },
    {
        slug: 'senior-software-engineer-ideal',
        company: 'IdearRating, Inc',
        description: 'Creating awesome applications for customers.',
        contract: ContractType.FullTime,
        type: 'Software Development',
        location: 'EGYPT',
        period: {from: new Date(2018, 2), to: new Date(2021, 3)},
        skills: getSkills('css', 'html', 'js', 'dotnet-core', 'angular', 'sql-server', 'git', 'aws', 'docker', 'jira', "mongodb", "mysql", "php", "node"),
        name: 'Senior Software Engineer',
        color: 'orange',
        links: [],
        logo: Assets.Unknown,
        jobDescription: ['Developed high-impact features with Node.js , Angular, and .Net Core, solving performance\n' +
        'bottlenecks and scaling database queries for over 500,000 active users.', 'Applied a data-driven architecture with MongoDB, MySQL, and SQL Server, optimizing database\n' +
        'access time and reducing data retrieval costs by 20%.', 'I worked closely with stakeholders to translate business requirements into technical solutions,\n' +
        'effectively solving user experience challenges', 'Designed and optimized MongoDB database structures and queries, leading to 50% faster query\n' +
        'performance.'],
        shortDescription: 'Creating awesome applications for customers.'
    },
    {
        slug: 'team-lead-voom',
        company: 'VOOOM',
        description: 'Creating awesome applications for customers.',
        contract: ContractType.PartTime,
        type: 'Software Development',
        location: 'EGYPT',
        period: {from: new Date(2019, 2), to: new Date(2020, 10)},
        skills: getSkills('css', 'html', 'js', 'angular', 'git', 'aws', 'docker', 'jira', "mysql", "python", "node", 'express'),
        name: 'Team Leader',
        color: 'violet',
        links: [],
        logo: Assets.Unknown,
        jobDescription: ['Spearheaded a team to develop new features, reducing bug counts by 40% through code reviews and\n' +
        'collaborative debugging sessions.', 'Developed reusable code libraries and APIs in Node.js, solving issues related to data inconsistency\n' +
        'across microservices.', 'Improved internal processes, accelerating feature delivery cycles by 20%.',
            'Designed and implemented a scalable application infrastructure using Angular, Node.js, and AWS',
            'Mentored junior developers, increasing their task completion rates by 35% within six months.'],
        shortDescription: 'Creating awesome applications for customers.'
    },
    {
        slug: 'senior-software-engineer-nabad',
        company: 'Nabda Care',
        description: 'Creating awesome applications for customers.',
        contract: ContractType.Contract,
        type: 'Software Development',
        location: 'EGYPT',
        period: {from: new Date(2016, 5), to: new Date(2018, 2)},
        skills: getSkills('vue', 'ts', 'sass', 'css', 'html', 'js', "ror", 'jira', 'git', 'aws', 'docker', 'mysql', 'reactjs'),
        name: 'Senior Full-stack Web Developer',
        color: 'blue',
        links: [],
        logo: Assets.Unknown,
        jobDescription: ['Led the design and development of a healthcare platform using Ruby on Rails and Ember.js,\n' +
        'increasing patient data processing efficiency by 45%.','Optimized database queries, improving the speed of medical report generation by 50%.',
        'Collaborated with stakeholders to build a scheduling system, improving appointment booking\n' +
        'accuracy by 25%.','Implemented real-time notifications via Action Cable, reducing response times for critical patient\n' +
            'alerts by 30%.'],
        shortDescription: 'Creating awesome applications for customers.'
    },
];

export const title = 'Experience';
