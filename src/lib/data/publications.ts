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
			{ to: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/ORanPaper/ECE_CSC_572_Project_Report.pdf&embedded=true', label: 'View PDF' },
			{ to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/ORanPaper/ECE_CSC_572_Project_Report.pdf', label: 'Download PDF' }
		],
		period: { from: new Date('2025-01-01') },
		type: 'Research Paper'
	},

		{
		slug: 'csc630-paper',
		name: 'CSC 630 Research Report',
		logo: Assets.Unknown,
		shortDescription: 'Research report on offloading ECG inference from ESP32 to host via real-time layered BLE transmission.',
		description: 'An independent study extending a PhD-level testbed that redesigns an ESP32-based cardiac monitoring system into a pure streaming node, offloading TFLite ECG inference to a Python host over BLE. Introduces a 30-window offline ring buffer for zero-data-loss during disconnections, empirically calibrates an INT8 detection threshold of 0.45, and evaluates utility-aware scheduling (Proposed, DA-EDF, EDF) with FIFO tie-breaking under 30–75% packet loss. Validated on a DOIT ESP32 DEVKIT V1 using MIT-BIH arrhythmia records, achieving 98.69% R-peak preservation at 30% packet loss and ≈855 bytes/s sustained BLE throughput (~3–5% of available bandwidth).',
		links: [
			{ to: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC630Paper/NCSU_CSC_630_Research_Report.pdf&embedded=true', label: 'View PDF' },
			{ to: 'https://raw.githubusercontent.com/MrScruffles/ashz/main/static/screenshots/CSC630Paper/NCSU_CSC_630_Research_Report.pdf', label: 'Download PDF' }
		],
		period: { from: new Date('2026-01-01') },
		type: 'Research Paper'
	}
];

export const title = 'Publications';
