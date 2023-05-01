<script>
 import { createEventDispatcher } from 'svelte';

 const dispatch = createEventDispatcher();

 /**
  * Handle the form submission and dispatch the submit event.
  * @param {Event} event - The submit event.
  */
 function handleSubmit(event) {
   event.preventDefault();
   const message = event.target.message.value;
   if (message.trim()) {
     dispatch('submit', { message });
     event.target.message.value = '';
   }
 }
</script>

<!-- Add your preferred styling for the chat input component -->
<style>
 form {
   display: flex;
   padding: 4px;
 }
 input {
   flex-grow: 1;
   padding: 8px;
   border: 1px solid #ccc;
 }
 button {
   background-color: #2196f3;
   color: white;
   padding: 8px;
   border: none;
   cursor: pointer;
 }
</style>

<form on:submit={handleSubmit}>
 <input type="text" name="message" placeholder="Type your message..." />
 <button type="submit">Send</button>
</form>
