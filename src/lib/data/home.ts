import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Hany';

export const lastName = 'Sayed Ahmed';

export const description =
	' Experienced Senior Software Engineer with over 10 years in software development, specializing in\n' +
	'Ruby on Rails,. NET Core, Angular, React, Vue.js, Node.js, PostgreSQL, and MySQL. I bring expertise\n' +
	'in building scalable, efficient, and maintainable full-stack applications, with a strong focus on\n' +
	'Agile methodologies and continuous improvement. A Certified Scrum Master with a proven ability\n' +
	'to lead cross-functional teams and deliver high-quality solutions under tight deadlines.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/h4hany' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/h4hany'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'hany.sayed.a@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/h4han'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'python', 'ts','ror','c#');
