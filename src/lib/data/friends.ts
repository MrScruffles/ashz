import Assets from './assets';
import type { Friend } from '../types';

export const items: Array<Friend> = [
	{
		slug: 'friend-1',
		name: 'Error Cezar',
		logo: Assets.Unknown,
		shortDescription: 'Developer',
		description: 'well he knows that cats aren\'t real at least.',
		links: [
			{ to: 'https://github.com/Error-Cezar', label: 'GitHub' },
			{ to: 'https://errorcezar.lol/', label: 'Website' }
		]
	},
];

export const title = 'Friends';
