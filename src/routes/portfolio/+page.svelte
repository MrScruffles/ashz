<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { items, title } from '@data/portfolio';
	import { computeExactDuration } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import type { Icon, PortfolioItem, PortfolioStat } from '$lib/types';

	import Card from '$lib/components/Card/Card.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import ChipIcon from '$lib/components/Chip/ChipIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	export let data: { stats: Record<string, Array<PortfolioStat>> };

	let result: Array<PortfolioItem> = [...items];

	const formatDate = (date: Date): string =>
		date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

	const getPeriod = (item: PortfolioItem): string =>
		`${formatDate(item.period.from)} – ${item.period.to ? formatDate(item.period.to) : 'Present'}`;

	const getBullets = (item: PortfolioItem): Array<string> =>
		item.description.split('\n').map((line) => line.replace(/^- /, ''));

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search.toLowerCase();

		if (isBlank(query)) {
			result = items;
			return;
		}

		result = items.filter(
			(it) =>
				it.name.toLowerCase().includes(query) ||
				it.company.toLowerCase().includes(query) ||
				it.type.toLowerCase().includes(query) ||
				it.description.toLowerCase().includes(query)
		);
	};

	$: sections = [
		{
			title: 'Current Roles',
			icon: 'i-carbon-rocket' as Icon,
			items: result.filter((it) => !it.period.to)
		},
		{
			title: 'Previous Roles',
			icon: 'i-carbon-in-progress' as Icon,
			items: result.filter((it) => it.period.to)
		}
	].filter((section) => section.items.length > 0);
</script>

<SearchPage {title} on:search={onSearch}>
	{#if sections.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-portfolio" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		{#each sections as section (section.title)}
			<section class="col mt-10">
				<div class="row items-center gap-3 mb-6 text-[var(--secondary-text)]">
					<UIcon icon={section.icon} classes="text-1.5em" />
					<h2 class="m-0 text-1.3em font-600">{section.title}</h2>
					<span
						class="px-2 py-0.5 rounded-10px text-0.75em border-1px border-solid border-[var(--border)] text-[var(--tertiary-text)]"
						>{section.items.length}</span
					>
				</div>
				<div class="portfolio-timeline col">
					{#each section.items as item (item.slug)}
						<div class="portfolio-entry relative">
							<div class="portfolio-dot" style:--dot-color={item.color} />
							<div
								class="row items-center flex-wrap gap-2 mb-3 text-0.85em text-[var(--tertiary-text)]"
							>
								<UIcon icon="i-carbon-calendar" />
								<span class="font-500 text-[var(--secondary-text)]">{getPeriod(item)}</span>
								<span>·</span>
								<span class="font-300"
									>{computeExactDuration(item.period.from, item.period.to)}</span
								>
							</div>
							<Card color={item.color} margin="0px 0px 30px 0px" tiltDegree={1}>
								<div class="row items-start gap-5">
									<CardLogo src={getAssetURL(item.logo)} alt={item.company} size={55} />
									<div class="col flex-1 gap-1">
										<h3 class="m-0 text-1.2em font-600">{item.name}</h3>
										<span class="text-[var(--secondary-text)]">{item.company}</span>
										<div class="row flex-wrap mt-2 text-0.85em">
											<Chip>
												<UIcon icon="i-carbon-location" />
												<span class="m-l-1">{item.location}</span>
											</Chip>
											<Chip>
												<UIcon icon="i-carbon-hourglass" />
												<span class="m-l-1">{item.contract}</span>
											</Chip>
											<Chip>
												<UIcon icon="i-carbon-tag" />
												<span class="m-l-1">{item.type}</span>
											</Chip>
										</div>
									</div>
								</div>
								{#if (data.stats[item.slug] ?? []).length > 0}
									<div class="portfolio-stats mt-5">
										{#each data.stats[item.slug] as stat}
											<div
												class="col p-3 rounded-10px border-1px border-solid border-[var(--border)]"
											>
												<span class="text-1.2em font-700">{stat.value}</span>
												<span class="text-0.8em font-300 text-[var(--tertiary-text)]"
													>{stat.label}</span
												>
											</div>
										{/each}
									</div>
								{/if}
								<ul class="portfolio-bullets mt-5 mb-0 text-0.9em text-[var(--secondary-text)]">
									{#each getBullets(item) as bullet}
										<li>{bullet}</li>
									{/each}
								</ul>
								{#if item.links.length > 0}
									<div class="row flex-wrap mt-3 text-0.85em">
										{#each item.links as link}
											<Chip href={link.to}>
												<UIcon icon="i-carbon-launch" />
												<span class="m-l-1">{link.label}</span>
											</Chip>
										{/each}
									</div>
								{/if}
								<div class="row flex-wrap items-center justify-between gap-3 mt-5">
									<div class="row flex-wrap">
										{#each item.skills as skill}
											<ChipIcon
												logo={getAssetURL(skill.logo)}
												name={skill.name}
												href={`${base}/skills/${skill.slug}`}
											/>
										{/each}
									</div>
									<Chip href={`${base}/portfolio/${item.slug}`}>
										<span class="m-r-1">Details</span>
										<UIcon icon="i-carbon-arrow-right" />
									</Chip>
								</div>
							</Card>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	{/if}
</SearchPage>

<style lang="scss">
	.portfolio-timeline {
		margin-left: 8px;
		padding-left: 32px;
		border-left: 1px solid var(--border);

		@media (max-width: 850px) {
			padding-left: 20px;
		}
	}

	.portfolio-dot {
		position: absolute;
		top: 3px;
		left: -39px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background-color: var(--dot-color);
		box-shadow: 0 0 0 4px var(--main);

		@media (max-width: 850px) {
			left: -27px;
		}
	}

	.portfolio-stats {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 10px;
	}

	.portfolio-bullets {
		padding-left: 20px;

		li {
			margin-bottom: 8px;
			line-height: 1.5;
		}
	}
</style>
