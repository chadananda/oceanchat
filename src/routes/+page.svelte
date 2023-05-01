<script>
	import ChatLayout from '$lib/components/ChatLayout.svelte';

	let userInput = '';

	// Define dummy data for chat messages, conversations, and current repository
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

	// Function to handle form submission
	function handleSubmit() {
			// Add the user's input to the messages array
			messages.push({ sender: 'user', content: userInput });

			// Clear the input field
			userInput = '';

			// TODO: Implement logic to generate a response from the chatbot
	}
</script>

<ChatLayout {conversations} {currentRepository}>
	<div slot="chat-messages" class="chat-messages">
		<!-- Render the chat messages here -->
		{#each messages as message}
				<div class={`chat-message ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
						<div class={`inline-block p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
								{message.content}
						</div>
				</div>
		{/each}
</div>

<form slot="chat-input" class="chat-input-form flex items-center">
		<input
				class="chat-input flex-1 px-4 py-2 mr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				type="text"
				bind:value={userInput}
				placeholder="Type your message here..."
		/>
		<button class="chat-submit-button px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" type="submit">Send</button>
</form>
</ChatLayout>

<style>
/* Add custom styling here */
.chat-messages {
		background-color: #f7f7f7;
		color: #333;
		padding: 1rem;
		flex: 1;
		overflow-y: auto;
}

.chat-message {
		margin-bottom: 1rem;
}

.chat-input-form {
		background-color: #fff;
		padding: 1rem;
}

.chat-input {
		width: 100%;
}

.chat-submit-button {
		/* Add any additional styling for the submit button */
}
</style>

