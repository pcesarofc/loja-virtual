import { React, Header, Navigator, Router, Footer, AuthContext } from './config/configComponents';
import { auth } from './service/Firebase';
import { BrowserRouter } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import './sass/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { setUsuario } = useContext(AuthContext);

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