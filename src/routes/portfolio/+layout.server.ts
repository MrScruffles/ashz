import { items } from '@data/portfolio';
import type { PortfolioStat } from '$lib/types';

type Game = { id: number; visits: number; favoritedCount: number };

const formatCount = (count: number): string => {
	const units: Array<[number, string]> = [
		[1e9, 'B'],
		[1e6, 'M'],
		[1e3, 'K']
	];

	for (const [size, suffix] of units) {
		if (count >= size) {
			return `${Math.floor((count / size) * 10) / 10}${suffix}+`;
		}
	}

	return `${count}`;
};

export async function load({ fetch }: { fetch: typeof globalThis.fetch }) {
	const universeIds = [
		...new Set(items.flatMap((item) => (item.stats ?? []).flatMap((stat) => stat.live?.universeIds ?? [])))
	];

	let games: Array<Game> = [];

	try {
		const response = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds.join(',')}`);

		if (response.ok) {
			games = ((await response.json()) as { data: Array<Game> }).data;
		}
	} catch {
		games = [];
	}

	const getValue = (stat: PortfolioStat): string => {
		if (!stat.live) {
			return stat.value;
		}

		const { universeIds: ids, field } = stat.live;
		const matched = games.filter((game) => ids.includes(game.id));

		if (matched.length !== ids.length) {
			return stat.value;
		}

		return formatCount(matched.reduce((total, game) => total + game[field], 0));
	};

	const stats: Record<string, Array<PortfolioStat>> = Object.fromEntries(
		items.map((item) => [
			item.slug,
			(item.stats ?? []).map((stat) => ({ label: stat.label, value: getValue(stat) }))
		])
	);

	return { stats };
}
