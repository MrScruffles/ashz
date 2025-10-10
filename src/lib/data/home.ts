import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ash';

export const lastName = 'Zahabiuon';

export const description = "I'm a UNCC graduate with a B.S. in Computer Science and Computer Engineering. I'm a current Master's student in Computer Science at NCSU!"

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/MrScruffles/' 
	},
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

export const skills = getSkills('luau', 'reactjs', 'postgresql', 'lua', 'ruby', 'js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');