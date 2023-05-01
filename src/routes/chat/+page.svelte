<script>
 import { writable } from 'svelte/store';
 import Message from '$lib/components/Message.svelte';
 import ChatInput from '$lib/components/ChatInput.svelte';

 /**
  * Dummy data for messages.
  * @type {import('$lib/components/Message.svelte').Message[]}
  */
 const messages = [
   { text: 'Hello, how can I help you?', sender: 'bot' },
   { text: 'What is the capital of France?', sender: 'user' },
   { text: 'The capital of France is Paris.', sender: 'bot' },
 ];

 const messagesStore = writable(messages);

 /**
  * Handle the chat input submission and add a new message.
  * @param {CustomEvent<{message: string}>} event - The submit event.
  */
 function handleInputSubmit(event) {
   messagesStore.update((messages) => [
     ...messages,
     { text: event.detail.message, sender: 'user' },
   ]);
 }
</script>

<!-- Add your preferred styling for the chat interface -->
<style>
 .chat-container {
   display: flex;
   flex-direction: column;
   height: 100%;
 }
 .messages {
   flex-grow: 1;
   overflow-y: auto;
   padding: 16px;
 }
 .input {
   padding: 16px;
 }
</style>

<div class="chat-container">
 <div class="messages">
   {#each $messagesStore as message}
     <Message {message} />
   {/each}
 </div>
 <div class="input">
   <ChatInput on:submit={handleInputSubmit} />
 </div>
</div>
