<!-- ChatMessage.svelte -->

<script>
  export let messages;
</script>

<main class="h-full flex items-center">
  <div class="chat-messages w-full">
    {#each messages as message}
      <div class="chat-message mb-4 {message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}">
        <span class="sender">
          <svg class="{message.sender === 'user' ? 'text-blue-600' : 'text-green-600'} w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="{message.sender === 'user' ? 'M9 9a2 2 0 100-4 2 2 0 000 4zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zM9 13a2 2 0 100 4 2 2 0 000-4zM7 17a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z' : 'M11 9a2 2 0 100-4 2 2 0 000 4zM13 11a1 1 0 01-1-1H8a1 1 0 110-2h4a1 1 0 011 1zM11 13a2 2 0 100 4 2 2 0 000-4zM13 17a1 1 0 01-1-1H8a1 1 0 110-2h4a1 1 0 011 1z'}"></path>
          </svg>
        </span>
        <span class="message-content bg-gray-200 px-4 py-2 rounded-lg inline-flex items-center">
          {message.content}
        </span>
      </div>
    {/each}
  </div>
</main>