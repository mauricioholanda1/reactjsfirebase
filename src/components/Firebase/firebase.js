import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBJs_VvfBBTn-h3XKyZ4876JIjZHGcpoH8",
  authDomain: "cadastrofirebase-mauricio.firebaseapp.com",
  databaseURL: "https://cadastrofirebase-mauricio.firebaseio.com",
  projectId: "cadastrofirebase-mauricio",
  storageBucket: "cadastrofirebase-mauricio.appspot.com",
  messagingSenderId: "741647790440",
  appId: "1:741647790440:web:4bc8328c57bb62146066dd",
  measurementId: "G-EN46NLZLLL"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");
}

export default Firebase;
