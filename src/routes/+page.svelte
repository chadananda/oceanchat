<script>
	// Define dummy data for chat messages
	let messages = [
			{ sender: 'user', content: 'Hello, how are you?' },
			{ sender: 'bot', content: 'Hi there! I am doing well. How can I assist you today?' },
			{ sender: 'user', content: 'What is the capital of France?' },
			{ sender: 'bot', content: 'The capital of France is Paris.' }
	];

	// Define a variable to hold the user's input
	let userInput = '';

	// Function to handle form submission
	function handleSubmit() {
			// Add the user's input to the messages array
			messages.push({ sender: 'user', content: userInput });

			// Clear the input field
			userInput = '';

			// TODO: Implement logic to generate a response from the chatbot
	}
</script>

<div class="chat-container flex flex-col h-screen">
	<div class="chat-messages flex-1 overflow-auto p-4 space-y-4">
			{#each messages as message}
					<div class={`chat-message ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
							<div class={`inline-block p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
									{message.content}
							</div>
					</div>
			{/each}
	</div>

	<form class="chat-input-form flex items-center p-4" on:submit|preventDefault={handleSubmit}>
			<input
					class="chat-input flex-1 px-4 py-2 mr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					type="text"
					bind:value={userInput}
					placeholder="Type your message here..."
			/>
			<button class="chat-submit-button px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" type="submit">Send</button>
	</form>
</div>
