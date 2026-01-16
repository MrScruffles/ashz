<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { title, items } from '@data/publications';
	import type { Publication } from '$lib/types';

	let search = '';

	let result: Array<Publication> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search;

		result = items.filter((it) => {
			return (
				it.name.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.shortDescription.toLowerCase().includes(s) ||
				it.type.toLowerCase().includes(s)
			);
		});
	};
</script>

<SearchPage {title} {search} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-document" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="publications-list mt-5">
			{#each result as publication}
				<Card margin="0px" tiltDegree={2} classes={['publication-card']}>
					<div class="flex-1 col gap-2 items-stretch">
						<img
							src={getAssetURL(publication.logo)}
							alt={publication.name}
							height="50"
							width="50"
							class="mb-2"
						/>
						<div class="text-[1.3em] font-semibold">{publication.name}</div>
						<div class="text-[0.9em] text-[var(--secondary-text)]">
							{publication.shortDescription}
						</div>
						<div class="text-[0.8em] text-[var(--tertiary-text)]">
							{publication.type}
						</div>
						<div class="text-[0.85em] mt-2">{publication.description}</div>
						{#if publication.links && publication.links.length > 0}
							<div class="flex flex-wrap gap-2 mt-4">
								{#each publication.links as link}
									<a
										href={link.to}
										target="_blank"
										rel="noopener noreferrer"
										download={link.label.includes('Download') ? '' : null}
										class="publication-link px-3 py-2 rounded-8px text-[0.85em] decoration-none flex items-center gap-2 hover:bg-[var(--main-hover)] border-1px border-solid border-[var(--border)] transition-colors"
									>
										<UIcon icon={link.label.includes('Download') ? 'i-carbon-download' : 'i-carbon-view'} classes="text-1.2em" />
										<span>{link.label}</span>
									</a>
								{/each}
							</div>
						{/if}
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</SearchPage>

<style lang="scss">
	.publications-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.publication-link {
		color: var(--accent-text);

		&:hover {
			color: var(--accent-text-hover);
		}
	}
</style>
