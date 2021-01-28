
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';
import Characters from './views/Characters';
import Home from './views/Home';
import Planets from './views/Planets';
import Starships from './views/Starships';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
    <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Characters' component={Characters} />
          <Route exact path='/Planets' component={Planets} />
          <Route exact path='/Starships' component={Starships} />
          
        </Switch>
    </div>
        <Footer />
      </BrowserRouter>
  );
}

export default injectContext(App);
