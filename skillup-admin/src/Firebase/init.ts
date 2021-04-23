import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DEV_APPID,
  measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID,
};

export default class Firebase {
  firestore: firebase.firestore.Firestore;

  constructor() {
    firebase.initializeApp(config);

    this.firestore = firebase.firestore();
  }
}
