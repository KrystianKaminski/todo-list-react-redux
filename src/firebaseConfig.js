import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA42nVxu8nu-jmqerF7PE1P6-5QvDfheuI",
    authDomain: "todo-list-ab54d.firebaseapp.com",
    databaseURL: "https://todo-list-ab54d.firebaseio.com",
    projectId: "todo-list-ab54d",
    storageBucket: "",
    messagingSenderId: "1045244226167"
};
firebase.initializeApp(config);


export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()