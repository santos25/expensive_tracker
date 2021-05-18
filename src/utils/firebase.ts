import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCIQdPkSA_1UV4WwzSaYzPcIdj9XBAjTMI',
  authDomain: 'expense-tracker-8bfbc.firebaseapp.com',
  projectId: 'expense-tracker-8bfbc',
  storageBucket: 'expense-tracker-8bfbc.appspot.com',
  messagingSenderId: '431498000094',
  appId: '1:431498000094:web:c80e40899516459328344f',
  measurementId: 'G-4QL4NE4H7X',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


