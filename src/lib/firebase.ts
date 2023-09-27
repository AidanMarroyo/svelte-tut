import { getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC9j2nIvcAYilEyRrOPDTR3C1_rLYKWTaE',

	authDomain: 'svelte-tutorial-f75d3.firebaseapp.com',

	projectId: 'svelte-tutorial-f75d3',

	storageBucket: 'svelte-tutorial-f75d3.appspot.com',

	messagingSenderId: '870166769633',

	appId: '1:870166769633:web:61c3aa57c918fb61b92ca0',
};

function createFirebaseApp(config: any) {
	try {
		return getApp();
	} catch {
		return initializeApp(config);
	}
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports

export const auth = getAuth(firebaseApp);

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

/// Helper functions
