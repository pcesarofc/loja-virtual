import { React, Header, Navigator, Router, Footer } from './config/configComponents';
import { firebase, auth } from './service/Firebase';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './sass/app.scss';
import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider)
  }

  const handleVerify = () => {
    const user = firebase.auth().currentUser;
  }

  const handleLogout = () => {
    firebase.auth().signOut()
  }

  const Buscar = () => {
    const user = firebase.auth().currentUser;
    const url = 'https://loja-virtualpc-default-rtdb.firebaseio.com/clientes/' + user.uid + "/chart.json"

    if (user != null) {
      axios.get(url).then(response => {
        console.log(response.data)
      })
    } else {
      console.log('Não existe usuário logado!')
    }
  }

  const Inserir = () => {
    const user = firebase.auth().currentUser;

    axios.post('https://loja-virtualpc-default-rtdb.firebaseio.com/clientes/' + user.uid + "/chart.json",
      {
        "products": "casaco"
      }
    )
  }

  const { usuario, setUsuario } = useContext(AuthContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {

        setUsuario({
          uid: user.uid,
          photo: user.photoURL,
          name: user.displayName,
          email: user.email
        });
      }
    });
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Navigator />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;