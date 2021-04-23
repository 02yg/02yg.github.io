/* firebase setting */
var firebaseConfig = {
    apiKey: "AIzaSyBuIoqz8kTtIVhzCJnK0TnY5K_Doj3Tf9s",
    authDomain: "yg-2f58e.firebaseapp.com",
    projectId: "yg-2f58e",
    storageBucket: "yg-2f58e.appspot.com",
    messagingSenderId: "186793862699",
    appId: "1:186793862699:web:2314d11c2fbeb034996c6e",
    measurementId: "G-V2PN9J5992"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
const storage = firebase.storage().ref();