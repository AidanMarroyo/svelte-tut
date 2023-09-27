<script lang="ts">

 import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
 import { Collection, Doc, SignedIn, SignedOut, userStore } from 'sveltefire';


const auth = getAuth()

 async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider)

 }
 const user = userStore(auth);

</script>


{#if $user}
  <h2 class="card-title">Welcome, {$user.displayName}</h2>
  <p class="text-center text-success">You are logged in</p>


  
  {:else}

  <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
  {/if}