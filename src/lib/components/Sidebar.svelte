<script>
  export let conversations;
</script>

<main class="chat-container p-3">
  <div class="conversation-list">
    {#each conversations as conversation}
      <div class="conversation-item">
        <span class="conversation-name">{conversation.name}</span>
        <span class="repository-indicator">{conversation.repository}</span>
      </div>
    {/each}
  </div>
 </main>