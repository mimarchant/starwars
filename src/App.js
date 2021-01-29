import Navbar from './components/navbar';
import './App.css';

import Home from './views/home';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notfound from './views/notfound';
import Characters from './views/characters';
import Planets from './views/planets';
import Vehicles from './views/vehicles';
import Favorites from './views/favorites';
import injectContext from './store/appContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/vehicles' component={Vehicles} />
          <Route exact path='/planets' component={Planets} />
          <Route exact path='/characters' component={Characters} />
          <Route exact path='/' component={Home} />
          <Notfound component={Notfound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
