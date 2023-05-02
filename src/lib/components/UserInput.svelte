<script>
 let userInput = '';

 function handleSubmit() {
   // Add logic for handling user input here
   console.log('User Input:', userInput);

   // Clear the input field
   userInput = '';
 }
</script>

<form class="chat-input-form" on:submit|preventDefault={handleSubmit}>
 <input
   class="chat-input"
   type="text"
   bind:value={userInput}
   placeholder="Type your message here..."
 />
 <button type="submit" class="chat-submit-button">Send</button>
</form>

<style>
 /* Add any custom styles here */
</style>
