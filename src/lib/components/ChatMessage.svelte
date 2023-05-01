<script>
 export let conversations;
 export let currentRepository;
</script>

<main class="chat-container">
 <div class="conversation-list">
   {#each conversations as conversation}
     <div class="conversation-item {currentRepository === conversation.repository ? 'active' : ''}">
       <span class="repository-indicator">{conversation.repository}</span>
       <span class="conversation-name">{conversation.name}</span>
     </div>
   {/each}
 </div>
 <div class="chat-messages">
   {#each messages as message}
     <div class="chat-message">
       <span class="sender">{message.sender}</span>
       <span class="message-content">{message.content}</span>
     </div>
   {/each}
 </div>
 <form class="chat-input">
   <input type="text" placeholder="Type your message..." />
   <button type="submit">Send</button>
 </form>
</main>

<style>
 .chat-container {
   display: flex;
   height: 100%;
 }

 .conversation-list {
   flex: 0 0 25%;
   overflow-y: auto;
   padding: 1rem;
   background-color: #f5f5f5;
 }

 .conversation-item {
   display: flex;
   align-items: center;
   padding: 0.5rem;
   cursor: pointer;
 }

 .conversation-item.active {
   background-color: #e0e0e0;
 }

 .repository-indicator {
   display: inline-block;
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background-color: #4285f4;
   margin-right: 0.5rem;
 }

 .chat-messages {
   flex: 1;
   padding: 1rem;
   overflow-y: auto;
 }

 .chat-message {
   margin-bottom: 1rem;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
 }

 .sender {
   font-weight: bold;
   margin-bottom: 0.2rem;
 }

 .message-content {
   background-color: #f5f5f5;
   padding: 0.5rem;
   border-radius: 0.5rem;
 }

 .chat-input {
   display: flex;
   align-items: center;
   padding: 1rem;
   background-color: #f5f5f5;
 }

 .chat-input input {
   flex: 1;
   padding: 0.5rem;
   border-radius: 0.5rem;
   margin-right: 1rem;
   border: none;
 }

 .chat-input button {
   padding: 0.5rem 1rem;
   border-radius: 0.5rem;
   border: none;
   background-color: #4285f4;
   color: #fff;
   cursor: pointer;
 }
</style>
