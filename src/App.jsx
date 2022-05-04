import { React, Header, Navigator, Router } from './config/configComponents';
import './sass/app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigator />
      <Router />
      <Footer />
    </div>
  );
}

export default App;