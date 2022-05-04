import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDMrH8eXOOfEikSoLySMK_i_dl_tTlSkXc",
    authDomain: "loja-virtualpc.firebaseapp.com",
    projectId: "loja-virtualpc",
    storageBucket: "loja-virtualpc.appspot.com",
    messagingSenderId: "340715866324",
    appId: "1:340715866324:web:bc7a20ebab67c181c91341"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, app };