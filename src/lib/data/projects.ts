import Assets from './assets';
import {getSkills} from './skills';
import type {Project} from '../types';

export const items: Array<Project> = [
    {
        slug: 'climate-edge',
        color: '#5e95e3',
        description: 'Climate Edge - ESG&',
        shortDescription: 'A comprehensive emissions management solution enables your business to accurately\n' +
            'measure, monitor, and reduce its carbon footprint. With real-time insights and\n' +
            'intuitive dashboards, you can easily identify areas for improvement and track\n' +
            'progress towards your sustainability goals.\n' +
            'Provides accurate calculations of your emissions based on industry-specific and\n' +
            'internationally recognized methodologies,Provides detailed analysis of your\n' +
            'emissions data, allowing you to identify areas for improvement and make informed\n' +
            'decisions. Provides customizable emissions reports that meet disclosure requirements\n' +
            'and stakeholder expectations',
        links: [],
        logo: Assets.Unknown,
        name: 'Climate Edge - ESG&',
        period: {
            from: new Date(2022, 1),
            to: new Date(2024, 1)
        },
        skills: getSkills('angular', 'ts', 'css', 'sass', 'git', 'heroku', 'postgresql', 'firebase', 'ror'),
        type: 'Web App'
    },
    {
        slug: 'thekin',
        color: '#5e95e3',
        description: 'TheKin - Kinship',
        shortDescription: "Mobile App designed to make your pet parenting life actually easier with certified\n" +
            "vets who will answer any questions related to behavior, nutrition, and health. You\n" +
            "can talk with them 24/7 over chat, call, or email.",
        links: [],
        logo: Assets.Unknown,
        name: 'TheKin - Kinship',
        period: {
            from: new Date(2022, 1)
        },
        skills: getSkills('reactjs', 'ts', 'css', 'sass', 'git', 'heroku', 'postgresql', 'firebase', 'ror', 'aws'),
        type: 'Mobile App'
    },
    {
        slug: 'ai-widget',
        color: '#5e95e3',
        description: 'TheKin - Kinship',
        shortDescription: 'The Web App Widget makes your pet parenting life actually easier with certified vets\n' +
            'who will answer any questions related to behavior, nutrition, and health. You can\n' +
            'talk with them 24/7 over chat, call, or email.\n' +
            'Powered by a powerful AI chat that can diagnose pet symptoms and redirect the pet\n' +
            'parent with an expert for his case with a full documented report to help the expert\n' +
            'an pet parent, AI can provide the pet parent with recommended nutrition about his\n' +
            'pet and can also support the nearest hospital if the pet\'s condition is urgent.\n' +
            'The widget works as an independent widget, so it can be easily integrated with other\n' +
            'web applications.',
        links: [],
        logo: Assets.Unknown,
        name: 'AI Web Widget - Kinship',
        period: {
            from: new Date(2022, 1)
        },
        skills: getSkills('reactjs', 'angular', 'ts', 'css', 'sass', 'git', 'heroku', 'postgresql', 'firebase', 'dart', 'ror', 'aws'),
        type: 'Web App'
    },
    {
        slug: 'eye-talk',
        color: '#5e95e3',
        description: 'TheKin - Kinship',
        shortDescription: "Mobile app for optical character recognition when user take an image and the image\n" +
            "has text, the application pronounces it so it helps the blind people to know what\n" +
            "they capture and also helps other people to know new words, All documentation of the\n" +
            "application has been published;",
        links: [],
        logo: Assets.Unknown,
        name: 'EYE Talk - Graduation Project',
        period: {
            from: new Date(2012, 1),
            to: new Date(2013, 1)
        },
        skills: getSkills('java', 'android'),
        type: 'Mobile App'
    },
    {
        slug: 'email-marketing-platform',
        color: '#5e95e3',
        description: 'TheKin - Kinship',
        shortDescription: "Litmus empowers marketers to send great emails every time to create a world where\n" +
            "everyone has meaningful and relevant experiences with their chosen brands.\n" +
            "Litmus is an all-in-one email marketing solution that helps you optimize and\n" +
            "personalize every email to maximize your ROI and create exceptional brand\n" +
            "experiences for every subscriber.\n" +
            "Empowers your entire team to Work seamlessly across your martech stack with email\n" +
            "service provider and productivity integrations. Cut email development time in half\n" +
            "with reusable templates, drag-and-drop email creation, and codeless editing that\n" +
            "keeps emails on-brand, Cut through the inbox clutter with engaging, personalized\n" +
            "emails\n" +
            "Tap into engagement data and analytics that reveal what’s working and what isn’t, so\n" +
            "you can improve your email strategy with every send. Marketers who utilize Litmus\n" +
            "Email Analytics see 16% more ROI than they would with ESPs alone.\n" +
            "Get peace of mind when it comes to security. Litmus is SOC 2 certified and offers\n" +
            "enterprise-grade security features such as single sign-on and two-factor\n" +
            "authentication.",
        links: [],
        logo: Assets.Unknown,
        name: 'Email Marketing Platform - Litmus',
        period: {from: new Date(2018, 2), to: new Date(2021, 3)},
        skills: getSkills('mysql', 'vue', 'ts', 'css', 'sass', 'git', 'jira', 'firebase', 'ror', 'aws'),
        type: 'Web App'
    },
    {
        slug: 'equities',
        color: 'white',
        description: 'TheKin - Kinship',
        shortDescription: 'A unique research methodology to accurately analyze companies business activities\n' +
            'and revenue breakdown by mixing the manual research approach and the automated\n' +
            'classiﬁcation techniques to provide the most accurate and reliable data.\n',
        links: [],
        logo: Assets.Unknown,
        name: 'Equities - IdealRating Co.',
        period: {from: new Date(2018, 2), to: new Date(2021, 3)},
        skills: getSkills('css', 'html', 'js', 'dotnet-core', 'angular', 'sql-server', 'git', 'aws', 'docker', 'jira', "mongodb", "mysql", "php", "node"),
        type: 'Web App'
    },
    {
        slug: 'sukuk',
        color: 'yellow',
        description: 'TheKin - Kinship',
        shortDescription: "An engine that allows Shariah auditors to import their custom institutional Shariah\n" +
            "guidelines and screen the global universe of sukuk against and against Market\n" +
            "standards",
        links: [],
        logo: Assets.Unknown,
        name: 'Sukuk - IdealRating Co.',
        period: {from: new Date(2018, 2), to: new Date(2021, 3)},
        skills: getSkills('css', 'html', 'js', 'dotnet-core', 'angular', 'sql-server', 'git', 'aws', 'docker', 'jira', "mongodb", "mysql", "php", "node"),
        type: 'Web App'
    },
    {
        slug: 'index',
        color: 'yellow',
        description: 'TheKin - Kinship',
        shortDescription: 'An engine that provides the companies/entrepreneurs with adequate consulting and\n' +
            'support expertise in a timely and continuous way, which has become to corporations a\n' +
            'conditioning in order to apply with more assertiveness the proper strategy according\n' +
            'to their needs.\n' +
            'All financial markets present continuous and rapid changes, demanding companies\n' +
            'efficient answers that allow them to adequate strategies to changing market demands.',
        links: [],
        logo: Assets.Unknown,
        name: 'Index - IdealRating Co.',
        period: {from: new Date(2018, 2), to: new Date(2021, 3)},
        skills: getSkills('css', 'html', 'js', 'dotnet-core', 'angular', 'sql-server', 'git', 'aws', 'docker', 'jira', "mongodb", "mysql", "php", "node"),
        type: 'Web App'
    },
    {
        slug: 'live4',
        color: 'yellow',
        description: 'TheKin - Kinship',
        shortDescription: "The web-based application provides ESG & Responsible Investment Solutions and\n" +
            "Islamic Finance Solutions and offers the largest universe globally for Equities,\n" +
            "Fixed Income, and REITs along with custom-built indexes and purification services.\n" +
            "The subscription-based services enable users to access a comprehensive range of data\n" +
            "analyzed by our experienced research team and based on a proprietary methodology\n" +
            "complemented with an intuitive state-of-the-art interface and powerful search\n" +
            "capabilities with timely coverage.",
        links: [],
        logo: Assets.Unknown,
        name: 'Live4 - IdealRating Co.',
        period: {from: new Date(2018, 2), to: new Date(2021, 3)},
        skills: getSkills('css', 'html', 'js', 'dotnet-core', 'angular', 'sql-server', 'git', 'aws', 'docker', 'jira', "mongodb", "mysql", "php", "node"),
        type: 'Web App'
    },
    {
        slug: 'clinica',
        color: 'red',
        description: 'TheKin - Kinship',
        shortDescription: "A web-based application like ERB system provides a management system for clinics,\n" +
            "such as user can book an appointment, doctor can see his calendar, patient PMR\n" +
            "through all system so doctor can know what the patient's history is and his\n" +
            "treatment, and the clinic can manage its own stock",
        links: [],
        logo: Assets.Unknown,
        name: 'Clinica - Freelance',
        period: {
            from: new Date(2022, 1)
        },
        skills: getSkills('angular', 'ts', 'css', 'sass', 'git', 'heroku', 'postgresql', 'firebase', 'ror', 'aws'),
        type: 'Web App'
    },
	{
		slug: 'nabda',
		color: 'red',
		description: 'TheKin - Kinship',
		shortDescription: 'Web-based application for Patient and Doctors, Manage Patient Medical Report,\n' +
			'Conference call between patient and doctors, Book Nearby Doctor',
		links: [],
		logo: Assets.Unknown,
		name: 'Balsamee - Nabda Care',
		period: {from: new Date(2016, 5), to: new Date(2018, 2)},
		skills: getSkills('vue', 'ts', 'sass', 'css', 'html', 'js', "ror", 'jira', 'git', 'aws', 'docker', 'mysql', 'reactjs'),
		type: 'Web App'
	},
];

export const title = 'Projects';
