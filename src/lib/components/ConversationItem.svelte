<script>
 export let conversation;
</script>

<div class="conversation-item {conversation.active ? 'active' : ''}">
 <span class="repository-indicator"></span>
 <span class="conversation-name">{conversation.name}</span>
</div>

<style>
 .conversation-item {
   display: flex;
   align-items: center;
   padding: 0.5rem;
   cursor: pointer;
 }

 .active {
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

 .conversation-name {
   font-weight: bold;
 }
</style>
