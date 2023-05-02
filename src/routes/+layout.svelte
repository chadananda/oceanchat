<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<style>
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
</style>

<AppShell>
	<svelte:fragment slot="header">
			<AppBar>
					<svelte:fragment slot="lead">
							<strong class="text-xl uppercase">Ocean Chat</strong>
					</svelte:fragment>
					<svelte:fragment slot="trail">
							<!-- Add any links or buttons relevant to your project here -->
					</svelte:fragment>
			</AppBar>
	</svelte:fragment>
	<div class="flex h-screen">
			<slot name="sidebar"></slot>
			<div class="w-full p-0 bg-gray-200">
					<slot></slot>
			</div>
	</div>
</AppShell>
