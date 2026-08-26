import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ashkan';

export const lastName = 'Zahabiuon';

export const description = "I’m an MBA Candidate at NC State, holding a Master of Computer Science from NCSU and a B.S. in Computer Science and Computer Engineering from UNC Charlotte!";

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
]

export const skills = getSkills('luau', 'reactjs', 'postgresql', 'lua', 'ruby', 'js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');