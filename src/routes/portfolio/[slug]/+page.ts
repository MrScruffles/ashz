import { items } from '@data/portfolio';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const project = items.find((item) => {
			return item.slug === params.slug;
		});

		return { project };
	}
}