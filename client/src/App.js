import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <ProductsList /> 
          </Route>
          <Route path='/add'>
            <AddProductForm />
          </Route>
        </Switch>
                 
      </div>
    </Router>
  );
}

export default App;
