<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	export let conversations;
	export let currentRepository;
</script>

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
			<div class="w-1/4 bg-gray-800 text-white">
					<!-- Render your sidebar component here -->
					<slot name="sidebar"></slot>
			</div>
			<div class="w-3/4 p-4 bg-gray-200">
					<!-- Page Route Content -->
					<slot />
			</div>
	</div>
</AppShell>
