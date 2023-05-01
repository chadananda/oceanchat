<script>
 /**
  * The message object containing the text and sender information.
  * @type {{text: string, sender: 'user' | 'bot'}}
  */
 export let message;
</script>

<!-- Add your preferred styling for the message component -->
<style>
 .message {
   padding: 8px;
   margin: 4px;
   border-radius: 4px;
 }
 .message.user {
   background-color: #e0e0e0;
   text-align: left;
 }
 .message.bot {
   background-color: #2196f3;
   color: white;
   text-align: left;
 }
</style>

<div class="message {message.sender}">
 {message.text}
</div>
