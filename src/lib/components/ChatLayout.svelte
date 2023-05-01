<script>
 import ConversationItem from '$lib/components/ConversationItem.svelte';

 export let conversations;
 export let currentRepository;
</script>

<main class="chat-container">
 <div class="conversation-list bg-gray-900 text-white">
   {#each conversations as conversation}
     <ConversationItem {conversation} {currentRepository} />
   {/each}
 </div>
 <div class="chat-messages flex-1 p-4 overflow-y-auto bg-gray-100">
   <!-- Render the chat messages here -->
   <slot name="chat-messages"></slot>
 </div>
 <form class="chat-input flex items-center p-4 bg-white border-t">
   <!-- Render the chat input form here -->
   <input
     class="flex-1 px-4 py-2 mr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
     type="text"
     placeholder="Type your message here..."
   />
   <button class="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700" type="submit">Send</button>
 </form>
</main>

<style>
 .chat-container {
   display: flex;
   height: 100vh;
 }
</style>
