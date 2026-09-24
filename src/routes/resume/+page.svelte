<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<div class="resume-actions">
				<a href={data} download="Ashkan_Zahabiuon_Resume.pdf">
					<Chip size={'1.25em'}>
						<UIcon icon="i-carbon-download" />
						<span class="m-l-2">Download</span>
					</Chip>
				</a>
				<a href={data} target="_blank" rel="noopener noreferrer">
					<Chip size={'1.25em'}>
						<UIcon icon="i-carbon-launch" />
						<span class="m-l-2">Open in New Tab</span>
					</Chip>
				</a>
			</div>
			<iframe class="resume-frame" src={`${data}#view=FitH&navpanes=0`} title="Ashkan Zahabiuon Resume" />
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-top: 20px;

		a {
			color: inherit;
		}
	}

	.resume-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.resume-frame {
		width: 100%;
		max-width: 900px;
		height: 1150px;
		max-height: 85vh;
		border: 1px solid var(--border);
		border-radius: 15px;
		background-color: #ffffff;
	}
</style>
