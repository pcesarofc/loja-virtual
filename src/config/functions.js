import { firebase, auth } from '../service/Firebase';

const Logout = ({setUsuario}) => {
    firebase.auth().signOut();
    setUsuario()
}

const Login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider)
}

export { Login, Logout };