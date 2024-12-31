import Assets from './assets';
import type {Skill, SkillCategory} from '../types';
import svelte from '../md/svelte.md?raw';
import {omit, type StringWithAutoComplete} from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
    defineSkillCategory({name: 'Programming Languages', slug: 'pro-lang'}),
    defineSkillCategory({name: 'Frameworks', slug: 'framework'}),
    defineSkillCategory({name: 'Libraries', slug: 'library'}),
    defineSkillCategory({name: 'Langauges', slug: 'lang'}),
    defineSkillCategory({name: 'Databases', slug: 'db'}),
    defineSkillCategory({name: 'ORMs', slug: 'orm'}),
    defineSkillCategory({name: 'DevOps', slug: 'devops'}),
    defineSkillCategory({name: 'Testing', slug: 'test'}),
    defineSkillCategory({name: 'Dev Tools', slug: 'devtools'}),
    defineSkillCategory({name: 'Markup & Style', slug: 'markup-style'}),
    defineSkillCategory({name: 'Design', slug: 'design'}),
    defineSkillCategory({name: 'Soft Skills', slug: 'soft'}),
    defineSkillCategory({name: 'Version Control', slug: 'vs'})
] as const;

const defineSkill = <S extends string>(
    skill: Omit<Skill<S>, 'category'> & {
        category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
    }
): Skill<S> => {
    const out: Skill<S> = omit(skill, 'category');

    if (skill.category) {
        out.category = categories.find((it) => it.slug === skill.category);
    }

    return out;
};

export const items = [
    defineSkill({
        slug: 'js',
        color: 'yellow',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.JavaScript,
        name: 'Javascript',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'ror',
        color: 'red',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.Ror,
        name: 'Ruby on Rails',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'c#',
        color: 'blue',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.Csharp,
        name: 'C#',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'ts',
        color: 'blue',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.TypeScript,
        name: 'Typescript',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'css',
        color: 'blue',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.CSS,
        name: 'CSS',
        category: 'markup-style'
    }),
    defineSkill({
        slug: 'html',
        color: 'orange',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.HTML,
        name: 'HTML',
        category: 'markup-style'
    }),
    defineSkill({
        slug: 'sass',
        color: 'pink',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.Sass,
        name: 'Sass',
        category: 'markup-style'
    }),
    defineSkill({
        slug: 'reactjs',
        color: 'cyan',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        logo: Assets.ReactJs,
        name: 'React Js',
        category: 'library'
    }),
    defineSkill({
        slug: 'angular',
        color: 'red',
        description: 'svelte',
        logo: Assets.Angular,
        name: 'Angular',
        category: 'framework'
    }),
    defineSkill({
        slug: 'python',
        color: 'yellow',
        description: 'svelte',
        logo: Assets.Python,
        name: 'Python',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'php',
        color: 'blue',
        description: 'svelte',
        logo: Assets.Python,
        name: 'PHP',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'vue',
        color: 'green',
        description: 'Vue.js framework',
        logo: Assets.VueJs, // Replace with actual image import
        name: 'Vue.js',
        category: 'framework'
    },),
    defineSkill({
        slug: 'node',
        color: 'green',
        description: 'Node.js runtime environment',
        logo: Assets.NodeJs, // Replace with actual image import
        name: 'Node.js',
        category: 'runtime'
    },),
    defineSkill({
        slug: 'django',
        color: 'blue',
        description: 'Django framework',
        logo: Assets.Django, // Replace with actual image import
        name: 'Django',
        category: 'framework'
    },),
    defineSkill({
        slug: 'dotnet-core',
        color: 'purple',
        description: '.NET Core framework',
        logo: Assets.Csharp, // Replace with actual image import
        name: 'NET Core',
        category: 'framework'
    },),
    defineSkill({
        slug: 'express',
        color: 'green',
        description: 'Express.js framework',
        logo: Assets.ExpressJs, // Replace with actual image import
        name: 'Express',
        category: 'framework'
    },),
    defineSkill({
        slug: 'spring-boot',
        color: 'green',
        description: 'Spring Boot framework',
        logo: Assets.Java, // Replace with actual image import
        name: 'Spring Boot',
        category: 'framework'
    }),
    defineSkill({
        slug: 'dart',
        color: 'blue',
        description: 'Dart language',
        logo: Assets.Dart, // Replace with actual image import
        name: 'Dart',
        category: 'language'
    },),
    defineSkill({
        slug: 'jira',
        color: 'blue',
        description: 'JIRA project management tool',
        logo: Assets.Java, // Replace with actual image import
        name: 'JIRA',
        category: 'devtools'
    }),
    defineSkill({
        slug: 'svn',
        color: 'orange',
        description: 'SVN version control system',
        logo: Assets.Git, // Replace with actual image import
        name: 'SVN',
        category: 'devtools'
    },),
    defineSkill({
        slug: 'git',
        color: 'black',
        description: 'Git version control system',
        logo: Assets.Git, // Replace with actual image import
        name: 'Git',
        category: 'vs'
    },),
    defineSkill({
        slug: 'postgresql',
        color: 'blue',
        description: 'PostgreSQL database',
        logo: Assets.PostgreSQL, // Replace with actual image import
        name: 'PostgreSQL',
        category: 'db'
    }),
    defineSkill({
        slug: 'mysql',
        color: 'orange',
        description: 'MySQL database',
        logo: Assets.MySQL, // Replace with actual image import
        name: 'MySQL',
        category: 'db'
    }),
    defineSkill({
        slug: 'mongodb',
        color: 'green',
        description: 'MongoDB database',
        logo: Assets.MongoDB, // Replace with actual image import
        name: 'MongoDB',
        category: 'db'
    }),
    defineSkill({
        slug: 'sqlserver',
        color: 'blue',
        description: 'SQL Server database',
        logo: Assets.SqlServer, // Replace with actual image import
        name: 'SQL Server',
        category: 'db'
    }), defineSkill({
        slug: 'heroku',
        color: 'blue',
        description: 'Heroku cloud platform',
        logo: Assets.heroku, // Replace with actual image import
        name: 'Heroku',
        category: 'devops'
    }),
    defineSkill({
        slug: 'aws',
        color: 'yellow',
        description: 'Amazon Web Services cloud platform',
        logo: Assets.AWS, // Replace with actual image import
        name: 'Aws',
        category: 'devops'
    }),
    defineSkill({
        slug: 'android',
        color: 'green',
        description: 'Mobile development',
        logo: Assets.Android, // Replace with actual image import
        name: 'Android',
        category: 'pro-lang'
    }),
    defineSkill({
        slug: 'java',
        color: 'green',
        description: 'programing language',
        logo: Assets.Java, // Replace with actual image import
        name: 'Java',
        category: 'pro-lang'
    }),
    // defineSkill(),
    // defineSkill(),
    // defineSkill(),
    // defineSkill(),
    // defineSkill(),
] as const;

export const title = 'Skills';

export const getSkills = (
    ...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
    query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
    const out: ReturnType<typeof groupByCategory> = [];

    const others: Array<Skill> = [];

    items.forEach((item) => {
        if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

        // push to others if item does not have a category
        if (!item.category) {
            others.push(item);
            return;
        }

        // check if category exists
        let category = out.find((it) => it.category.slug === item.category?.slug);

        if (!category) {
            category = {items: [], category: item.category};

            out.push(category);
        }

        category.items.push(item);
    });

    if (others.length !== 0) {
        out.push({category: {name: 'Others', slug: 'others'}, items: others});
    }

    return out;
};
