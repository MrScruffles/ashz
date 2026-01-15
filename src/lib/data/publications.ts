import Assets from './assets';
import type { Publication } from '../types';

export const items: Array<Publication> = [
	{
		slug: 'oran-paper',
		name: 'ECE/CSC 572 Project Report',
		logo: Assets.Unknown,
		shortDescription: 'Research paper on O-RAN architecture and implementation.',
		description: 'A comprehensive project report exploring O-RAN (Open Radio Access Network) architecture, implementation strategies, and analysis conducted as part of the ECE/CSC 572 course.',
		links: [
			{ to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/ORanPaper/ECE_CSC_572_Project_Report.pdf', label: 'Download PDF' }
		],
		period: { from: new Date('2025-01-01') },
		type: 'Research Paper'
	}
];

export const title = 'Publications';
