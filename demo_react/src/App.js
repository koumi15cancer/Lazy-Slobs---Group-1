import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import ListReservationsComponents from './components/ListReservationsComponents';
import CreateReservationsComponents from './components/CreateReservationsComponents';
import ViewReservationsComponents from './components/ViewReservationsComponents';
import UpdateReseravationsComponents from './components/UpdateReseravationsComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';



function App() {
  return (
    <div>
      <Router>
               <HeaderComponent/>
                 <div className="Container">
                    <Switch>
                          <Route path = "/" exact component = {ListReservationsComponents}></Route>
                          <Route path = "/reservations" component = {ListReservationsComponents}></Route>
                          <Route path = "/add-reservation" component = {CreateReservationsComponents}></Route>
                          <Route path = "/view-reservation" component = {ViewReservationsComponents}></Route>
                          <Route path = "/update-reservation/:id" component = {UpdateReseravationsComponents}></Route>
                    </Switch>
                 </div>
               <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
