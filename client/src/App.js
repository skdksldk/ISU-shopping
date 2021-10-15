import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <main>
          <Route exact path='/' component={HomePage} />
           <Route exact path='/login' component={LoginPage} />
           <Route exact path='/register' component={RegisterPage} />
           <Route exact path='/shop' component={ProductsPage} />
           <Route
            exact
            path='/admin/productlist'
            component={ProductListPage}
          />
          <Route
            exact
            path='/admin/productlist/:pageNumber'
            component={ProductListPage}
          />
        </main>

      </Router>
    </div>
  );
}

export default App;
