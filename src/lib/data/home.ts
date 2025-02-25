import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ash';

export const lastName = 'Zahabiuon';

export const description = "I'm a Computer Science major with a minor in Computer Engineering at the University of North Carolina at Charlotte. I’m passionate am constantly learning new skills to expand my knowledge in the field!"

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/MrScruffles/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/ashkan-zahabiuon/'
	},
	{
		platform: Platform.Email,
		link: 'contact@ashz.org'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@AshiDivision'
	},
]
export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');