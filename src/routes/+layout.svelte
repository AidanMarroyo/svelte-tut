<script>
// @ts-nocheck

    import { auth, firestore } from '$lib/firebase';
    import { FirebaseApp } from 'sveltefire';
    import "../app.css";
  </script>
  
  <FirebaseApp {auth} {firestore}>
  <div class="min-h-screen flex flex-col">
    <slot />
</div>
</FirebaseApp>