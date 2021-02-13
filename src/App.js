import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Informations from './components/Informations';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/informations" component={Informations} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
