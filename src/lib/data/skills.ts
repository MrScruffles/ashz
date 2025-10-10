import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
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
		description: 'JavaScript is a versatile, high-level programming language commonly used for developing web applications, enabling dynamic interactions on websites. It is an essential skill for front-end development and is increasingly used on the back-end with environments like Node.js.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'TypeScript is a superset of JavaScript that adds static types, improving code quality and maintainability by providing early error detection and better tooling. It’s widely used in large-scale applications to enhance JavaScript’s flexibility with strong type checking.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS (Cascading Style Sheets) is used to design and style web pages by describing how HTML elements should be displayed. It allows developers to create visually engaging layouts with responsive designs and animations.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure of the content on the web and works hand-in-hand with CSS and JavaScript for designing and building websites.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Sass is a CSS preprocessor that adds power and elegance to basic CSS. It allows for variables, nested rules, and functions, making CSS more maintainable and scalable in large projects.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'React.js is a popular JavaScript library for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, enabling efficient updates and rendering in response to data changes.',
		logo: Assets.ReactJs,
		name: 'React.js',
		category: 'library'
	}),
	
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	
	defineSkill({
		slug: 'python',
		color: '#306998',
		description: 'Python is a high-level, interpreted programming language known for its readability and versatility. It is used across various fields including web development, data analysis, artificial intelligence, and scientific computing.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'java',
		color: '#00758f',
		description: 'Java is a high-level, class-based programming language widely used for building large-scale applications. Its portability and extensive libraries make it a popular choice for server-side development and Android applications.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'cpp',
		color: '#00599C',
		description: 'C++ is a general-purpose programming language that offers both high-level and low-level capabilities. It’s widely used in system/software development, game development, and performance-critical applications.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'csharp',
		color: '#178600',
		description: 'C# is a modern, object-oriented programming language developed by Microsoft. It is primarily used for developing desktop applications, web services, and games (using the Unity engine).',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'c',
		color: '#A8B9CC',
		description: 'C is a powerful, general-purpose programming language that provides low-level access to memory and efficient performance. It’s widely used for system programming, embedded systems, and applications that require direct interaction with hardware.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'php',
		color: '#777BB4',
		description: 'PHP is a widely-used open-source scripting language especially suited for web development. It is fast, flexible, and pragmatic, powering everything from blogs to popular websites like WordPress and Facebook.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'ruby',
		color: '#CC342D',
		description: 'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. Known for its elegant syntax, it is popular for web development, particularly with the Ruby on Rails framework.',
		logo: Assets.Ruby,
		name: 'Ruby',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'lua',
		color: '#000080',
		description: 'Lua is a lightweight, high-level programming language designed for embedded systems and game development. It is known for its simplicity, flexibility, and fast execution.',
		logo: Assets.Lua,
		name: 'Lua',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'luau',
		color: '#000080',
		description: 'Luau is a derivative of Lua designed to improve type safety and performance. It is widely used in game development, particularly for scripting in Roblox.',
		logo: Assets.LuaU,
		name: 'Luau',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'jupyter',
		color: '#ff8b33',
		description: 'Jupyter is an open-source platform for creating and sharing live code, visualizations, and interactive data science notebooks. It supports languages like Python, R, and Julia, and is widely used in data science and machine learning workflows.',
		logo: Assets.Jupyter,
		name: 'Jupyter',
		category: 'pro-lang'
	}),

	defineSkill({
		slug: 'postgresql',
		color: '#F29111',
		description: 'PostgreSQL is a powerful, open-source object-relational database system. It is known for its robustness, extensibility, and support for advanced data types and performance optimization features.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),

	defineSkill({
		slug: 'sqlite',
		color: '#003B57',
		description: 'SQLite is a lightweight, self-contained relational database management system. It is widely used in mobile applications, embedded systems, and small to medium-sized applications due to its simplicity and ease of integration.',
		logo: Assets.SQLite,
		name: 'SQLite',
		category: 'db'
	}),

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
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
