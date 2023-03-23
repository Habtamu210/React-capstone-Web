import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Nav from './componet/Nav';
import Models from './componet/Render';
import Details from './componet/Detail';

const App = () => (

  <Router>
    <Provider store={store}>
      <div className=" bg-primary h-min">
        <Nav />
        <div className="m">

          <Routes>
            <Route path="/" element={<Models />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Provider>
  </Router>

);

export default App;
