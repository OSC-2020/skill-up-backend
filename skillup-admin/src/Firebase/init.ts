import app from "firebase/app";
import "firebase/firestore";

const devConfig = {
  apiKey: "####",
  authDomain: "####",
  databaseURL: "####",
  projectId: "####",
  storageBucket: "####",
  messagingSenderId: "####",
  appId: "####",
  measurementId: "####",
};

const config = devConfig;

class Firebase {
  firestore: any;

  constructor() {
    app.initializeApp(config);
    this.firestore = app.firestore();
  }
}

export default Firebase;
