<!-- +page.svelte -->

<script>
	import { onMount } from 'svelte';
	import ChatMessages from '$lib/components/ChatMessages.svelte';
	import UserInput from '$lib/components/UserInput.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let messages = [
			{ sender: 'user', content: 'Hello, how are you?' },
			{ sender: 'bot', content: 'Hi there! I am doing well. How can I assist you today?' },
			{ sender: 'user', content: 'What is the capital of France?' },
			{ sender: 'bot', content: 'The capital of France is Paris.' }
	];

	let conversations = [
			{ name: 'Conversation 1', repository: 'Repository A' },
			{ name: 'Conversation 2', repository: 'Repository B' },
			{ name: 'Conversation 3', repository: 'Repository C' }
	];

	let currentRepository = 'Repository A';

	onMount(() => {
			// Logic to fetch or initialize data can be added here
	});
</script>

<div class="flex h-screen w-full">

 <div class="w-1/4 bg-gray-800 text-white">
	 	<div class="flex flex-col bg-gray-800 text-white">
		  	<Sidebar {conversations} />
   </div>
 </div>

 <div class="w-3/4 p-4 bg-gray-200">
	 	<div class="flex flex-col bg-gray-200">
	   	<ChatMessages {messages} />
		  	<UserInput />
	  </div>
 </div>

</div>




<style>
	/* Add any custom styles here */
</style>
