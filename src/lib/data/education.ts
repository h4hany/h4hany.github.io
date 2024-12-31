import Assets from './assets';
import type {Education} from '../types';

export const items: Array<Education> = [
    {
        degree: 'Awarded Scholarship 9-Month Diploma, Open Source Application Development Department',
        description: '',
        location: 'EGYPT',
        logo: Assets.ITI,
        name: '',
        year: '2015 - 2016',
        organization: 'INFORMATION TECHNOLOGY INSTITUTION',
        period: {from: new Date(2023, 0, 1)},
        shortDescription: '',
        slug: 'dummy-education-item-2',
        subjects: ['Python', 'C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java',
            'Ruby', 'Ruby on Rails', 'Django', 'Agile', 'PHP', 'MongoDB', 'MySql', 'Wordpress',
            'Drupal', 'Joomla', 'JavaScript', 'JQuery', 'HTML', 'CSS', 'Bootstrap', 'Sass', 'Git', 'Github',
            'Zend', 'Laravel', 'Codeigniter', 'Symfony', 'Angular', 'React', 'Vue', 'NodeJs', 'ExpressJs', 'Ionic',
            'Computer Architecture', 'Algorithms and Data structures']
    },
    {
        degree: 'Bachelor degree of Statistics and  Computer Science',
        description: '',
        location: 'EGYPT',
        logo: Assets.Unknown,
        name: '',
        organization: 'Ain Shams University',
        year: '2007 - 2013',
        period: {from: new Date(2020, 0, 1), to: new Date(2022, 5, 1)},
        shortDescription: '',
        slug: 'dummy-education-item',
        subjects: ['C', 'Algorithm', 'Algebra', 'C', 'C++', 'Java', 'Matlab']
    }

];

export const title = 'Education';
