import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type PortfolioItem } from '../types';

const reactStudiosGames = [9995828296, 4820230567, 6248486755];

const reactStudiosLinks = [
	{ to: 'https://www.roblox.com/games/74270291867468/Project-Ventura', label: 'Project Ventura' },
	{ to: 'https://www.roblox.com/games/13905922711/Perris-California', label: 'Perris, California' },
	{
		to: 'https://www.roblox.com/games/18436122805/Los-Angeles-California',
		label: 'Los Angeles, California'
	}
];

export const items: Array<PortfolioItem> = [
	{
		slug: 'ncsu-graduate-teaching-assistant',
		company: 'North Carolina State University',
		description:
			'- Evaluate student submissions and provide detailed written feedback\n- Coordinate with faculty to support course delivery',
		contract: ContractType.PartTime,
		type: 'Teaching',
		location: 'Raleigh, NC',
		period: { from: new Date(2026, 7, 1) },
		skills: [],
		name: 'Graduate Teaching Assistant',
		color: '#cc0000',
		links: [],
		logo: Assets.NCSU,
		shortDescription:
			'Evaluate student submissions, provide written feedback, and coordinate with faculty to support course delivery.'
	},
	{
		slug: 'delta-ring-2',
		company: 'Delta Ring 2',
		description:
			'- Refactored server-client vehicle and infantry physics for a cross-platform FPS with 5.3M+ visits and 86K+ favorites\n- Reverse-engineered active exploit scripts to architect targeted security patches, automated cheat detection, and ban systems\n- Streamlined client UI data pipelines and datastore sync via ConfigService, enabling zero-downtime live feature updates',
		contract: ContractType.Contract,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2026, 3, 1) },
		skills: getSkills('luau', 'lua'),
		name: 'Software Engineer',
		color: '#2563eb',
		links: [{ to: 'https://www.roblox.com/games/140198239016011/DELTA-RING-2', label: 'DELTA RING 2' }],
		logo: Assets.DeltaRing2,
		shortDescription:
			'Vehicle and infantry physics, exploit patching, and live-ops data pipelines for a cross-platform FPS with 5.3M+ visits.',
		stats: [
			{ label: 'Visits', value: '5.3M+', live: { universeIds: [9636406493], field: 'visits' } },
			{ label: 'Favorites', value: '86K+', live: { universeIds: [9636406493], field: 'favoritedCount' } }
		]
	},
	{
		slug: 'sniper-duels',
		company: 'Locked In Network (SNIPER DUELS)',
		description:
			'- Lead anti-cheat development for SNIPER DUELS, a cross-platform FPS (PC, mobile, console) with 397M+ visits and 1.9M+ favorites\n- Built Luau cheat detection and automated enforcement systems that have issued 440K+ successful bans to date\n- Developed and shipped additional gameplay features for a live game serving thousands of concurrent players',
		contract: ContractType.Contract,
		type: 'Anti-Cheat & Security',
		location: 'Remote',
		period: { from: new Date(2025, 9, 1) },
		skills: getSkills('luau', 'lua'),
		name: 'Anti-Cheat Developer',
		color: '#d83030',
		links: [{ to: 'https://www.roblox.com/games/109397169461300/SNIPER-DUELS', label: 'SNIPER DUELS' }],
		logo: Assets.SniperDuels,
		shortDescription:
			'Anti-cheat detection and automated enforcement for a 397M+ visit FPS, with 440K+ successful bans to date.',
		stats: [
			{ label: 'Visits', value: '397M+', live: { universeIds: [7264587281], field: 'visits' } },
			{ label: 'Favorites', value: '1.9M+', live: { universeIds: [7264587281], field: 'favoritedCount' } },
			{ label: 'Bans Issued', value: '440K+' }
		]
	},
	{
		slug: 'boss-studio-redliner',
		company: 'Boss Studio LLC (REDLINER)',
		description:
			'- Analyzed exploit tooling and script obfuscation risks for REDLINER, a movement-based FPS with 64.9M+ visits and 339K+ favorites\n- Developed Luau anti-cheat protections detecting unauthorized execution environments and exploit activity',
		contract: ContractType.Freelance,
		type: 'Anti-Cheat & Security',
		location: 'Remote',
		period: { from: new Date(2026, 4, 1), to: new Date(2026, 8, 1) },
		skills: getSkills('luau', 'lua'),
		name: 'Software Engineer',
		color: '#f97316',
		links: [{ to: 'https://www.roblox.com/games/94987506187454/REDLINER', label: 'REDLINER' }],
		logo: Assets.Redliner,
		shortDescription:
			'Exploit analysis and Luau anti-cheat protections for REDLINER, a movement FPS with 64.9M+ visits.',
		stats: [
			{ label: 'Visits', value: '64.9M+', live: { universeIds: [7265339759], field: 'visits' } },
			{ label: 'Favorites', value: '339K+', live: { universeIds: [7265339759], field: 'favoritedCount' } }
		]
	},
	{
		slug: 'react-studios-senior-software-engineer',
		company: 'React Studios',
		description:
			'- Architected cross-platform APIs with Bun, Luau, and Firebase, sustaining real-time data sync at sub-50ms response times\n- Spearheaded AWS infrastructure optimizations that scaled backend performance to production workloads at 99.9% stability\n- Streamlined cross-functional deployment pipelines and UX architecture, reducing release friction and lifting user engagement\n- Designed custom telemetry workflows to monitor user retention, sub-second latency targets, and live session health',
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Remote',
		period: { from: new Date(2025, 4, 1), to: new Date(2026, 7, 1) },
		skills: getSkills('bun', 'luau', 'ts'),
		name: 'Senior Software Engineer',
		color: '#61dafb',
		links: reactStudiosLinks,
		logo: Assets.ReactStudios,
		shortDescription:
			'Cross-platform APIs at sub-50ms response times and AWS infrastructure running at 99.9% stability.',
		stats: [
			{ label: 'Game Visits', value: '9.2M+', live: { universeIds: reactStudiosGames, field: 'visits' } },
			{ label: 'Response Times', value: '<50ms' },
			{ label: 'Stability', value: '99.9%' }
		]
	},
	{
		slug: 'react-studios-software-engineer',
		company: 'React Studios',
		description:
			'- Engineered custom Lua networking libraries and client-server sync frameworks for low-latency, high-traffic environments\n- Partnered with product and design leads to define feature requirements, translating engineering constraints into roadmaps\n- Refactored data persistence and state pipelines, shrinking server payloads and eliminating peak-concurrency bottlenecks',
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Remote',
		period: { from: new Date(2020, 9, 1), to: new Date(2025, 4, 1) },
		skills: getSkills('lua', 'luau'),
		name: 'Software Engineer',
		color: '#61dafb',
		links: reactStudiosLinks,
		logo: Assets.ReactStudios,
		shortDescription:
			'Lua networking libraries, client-server sync frameworks, and data persistence pipelines for high-traffic games.',
		stats: [
			{ label: 'Game Visits', value: '9.2M+', live: { universeIds: reactStudiosGames, field: 'visits' } },
			{ label: 'Game Favorites', value: '58K+', live: { universeIds: reactStudiosGames, field: 'favoritedCount' } }
		]
	},
	{
		slug: 'react-studios-software-engineer-intern',
		company: 'React Studios',
		description:
			'- Prototyped features in TypeScript, PHP, and Luau\n- Supported backend deployment, server health checks, and protocol debugging',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'Remote',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 7, 1) },
		skills: getSkills('ts', 'php', 'luau'),
		name: 'Software Engineer Intern',
		color: '#61dafb',
		links: [],
		logo: Assets.ReactStudios,
		shortDescription:
			'Prototyped features in TypeScript, PHP, and Luau and supported backend deployment and debugging.'
	}
];

export const title = 'Portfolio';
