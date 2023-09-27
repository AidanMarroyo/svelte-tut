<script>
   import { page } from "$app/stores";
   import { fly } from "svelte/transition";
</script>


 <!-- key subscribes to its children. Rebuilds all its children
 In this case, each time the page reloads, this animation will rerender -->
{#key $page.url}
 <div in:fly={{  x:'-100%', duration: 500 }}>
   <slot  />
 </div>
{/key}