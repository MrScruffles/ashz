import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ash';

export const lastName = 'Zahabiuon';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

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