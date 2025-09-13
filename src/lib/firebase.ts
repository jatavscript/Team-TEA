import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { getAuth, type Auth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration - using environment variables for better security
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAbyCCBuRUv809NrT3pepQdkdnO1iTngT8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "sikkim-tourism-bcbc8.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "sikkim-tourism-bcbc8",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "sikkim-tourism-bcbc8.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "670497358795",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:670497358795:web:bc66992bf820ab07406c4e",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-2J8281GH59",
};

let app: FirebaseApp;
let auth: Auth;
let analytics: Analytics | undefined;

// Initialize Firebase only once
app = initializeApp(firebaseConfig);
auth = getAuth(app);

// Analytics should be conditionally enabled and only when supported
if (typeof window !== "undefined") {
  void analyticsIsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { app, auth, analytics, googleProvider };

