<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { title } from '@data/portfolio';
	import type { Project } from '$lib/types';

	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Screenshot from '$lib/components/Screenshot/Screenshot.svelte';

	export let data: { project?: Project };

	const screenshots = data.project?.screenshots ?? [];
	let showVideos: boolean[] = [];
	let screenIndex: number | undefined = undefined;

	// Format the description to handle \n\n as <br> and render LaTeX-like expressions
	const formatDescription = (description: string | undefined): string => {
		if (!description) return "";

		// Replace double line breaks with <br><br>
		let formatted = description.replace(/\n\n/g, '<br><br>');

		// Render LaTeX-like expressions for math formulas using <div> for multiline and <span> for inline
		formatted = formatted.replace(/\[\s*([^]+?)\s*\]/g, '<div class="math-block">$1</div>'); // Block expressions
		formatted = formatted.replace(/\(\s*([^]+?)\s*\)/g, '<span class="math-inline">$1</span>'); // Inline expressions

		return formatted;
	};

	$: screenshot =
		typeof screenIndex !== 'undefined' && screenshots[screenIndex]
			? screenshots[screenIndex]
			: undefined;

	$: computedTitle = data.project ? `${data.project.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.project === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load project data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.project.logo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.project.name}</MainTitle>
					</div>
					<p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">{data.project.type}</p>
					<div class="w-75%">
						<CardDivider />
					</div>
					<div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
						{#each data.project.links as item}
							<Chip href={item.to}>
								<div class="row-center gap-2">
									<UIcon icon="i-carbon-link" />
									<span>{item.label}</span>
								</div>
							</Chip>
						{/each}
					</div>
					<div class="row-center flex-wrap m-b-2">
						{#each data.project.skills as item}
							<Chip
								classes="inline-flex flex-row items-center justify-center"
								href={`${base}/skills/${item.slug}`}
							>
								<CardLogo
									src={getAssetURL(item.logo)}
									alt={item.name}
									radius={'0px'}
									size={15}
									classes="mr-2"
								/>
								<span class="text-[0.9em]">{item.name}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.project.description}
						<!-- Use the formatted description with LaTeX support -->
						<Markdown content={formatDescription(data.project.description)} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
				<div class="w-100% m-t-8">
					<CardDivider />
				</div>
				{#if screenshots.length > 0}
					<div
						class="px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10"
					>
						{#each screenshots as item, index}
							<!-- Check if the screenshot is a video or an image -->
							{#if item.src.endsWith('.mp4') || item.src.endsWith('.webm')}
								<!-- Render the thumbnail for the video -->
								<div
									class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px"
									on:click={() => (screenIndex = index)}
								>
									<div
										class="screenshot aspect-video bg-contain w-100% cursor-pointer"
										style={`background-image: url(${item.thumbnail});`}
									/>
									<p class="text-[var(--tertiary-text)] font-300">{item.label}</p>
								</div>
							{:else}
								<!-- Render the image and open it in a modal on click -->
								<div
									class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px"
									on:click={() => (screenIndex = index)}
								>
									<div
										class="screenshot aspect-video bg-contain w-100% cursor-pointer"
										style={`background-image: url(${item.src});`}
									/>
									<p class="text-[var(--tertiary-text)] font-300">{item.label}</p>
								</div>
							{/if}
						{/each}
					</div>
				{:else}
					<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
						<UIcon icon="i-carbon-image" classes="text-3.5em" />
						<p class="font-300">No screenshots</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<!-- Video or Image modal that opens when clicked -->
{#if screenshot && screenshot.src.endsWith('.mp4')}
	<!-- Video modal -->
	<div class="modal-background" on:click={() => (screenIndex = undefined)}>
		<div class="modal-content" on:click|stopPropagation>
			<video class="w-full h-auto" controls autoplay>
				<source src={screenshot.src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
		<button class="close-modal" on:click={() => (screenIndex = undefined)}>Close</button>
	</div>
{:else if screenshot}
	<!-- Image modal -->
	<Screenshot {screenshot} onClose={() => (screenIndex = undefined)} />
{/if}

<style lang="scss">
	.screenshot {
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		transition: background-size 200ms;

		&:hover {
			background-size: 120%;
		}
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: rgba(0, 0, 0, 0.7);
		padding: 10px;
		border-radius: 5px;
		width: 90%;
		max-width: 900px;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
	}

	.close-modal {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		color: white;
		font-size: 2em;
		cursor: pointer;
	}

	/* Styles for inline math expressions */
	.math-inline {
		font-family: 'Courier New', monospace;
		background-color: #f9f9f9;
		padding: 0 4px;
		border-radius: 4px;
	}

	/* Styles for block math expressions */
	.math-block {
		display: block;
		font-family: 'Courier New', monospace;
		background-color: #f9f9f9;
		padding: 8px;
		margin: 8px 0;
		border-radius: 4px;
		text-align: center;
	}
</style>
