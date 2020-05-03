import React, { Component } from 'react';
import { Route , NavLink , Switch} from 'react-router-dom';

import Contacts from '../components/contact';
import Sidebar from '../components/sidebar';
import AboutUs from '../components/aboutUs';
import ContactUs from '../components/contactus';
import Career from '../components/career';
import Privacy from '../components/privacy';

class Layout extends Component {
  state = {
    dashEvents: [
        {name:"Contacts" , path: "/contacts"},
        {name:"Arithmatic Events" , path: "/events"}
    ]
  }

  render() {
    return (
      <div>
           <div className="d-flex flex-wrap justify-content-center headnav">
                {this.state.dashEvents.map((events) => (
                   <NavLink exact to={{
                       pathname: events.path
                   }}>  <div className="text-center m-2 pt-4 pb-4 pl-2" style={{width: '200px'}}>
                        <strong> {events.name}</strong>
                    </div> </NavLink>
                ))}
          </div>
         
            <div className="">
                {/* <Route path="/" exact render={() => <Contacts contacts={this.state.contacts} />} />
                <Route path="/events" exact render={() => <Sidebar />} /> */}
                <Switch>
                    <Route path="/events" exact component={Sidebar } /> 
                    <Route path="/contacts" exact component={Contacts} />
                </Switch>
                <Switch>
                    <Route path="/aboutus" exact component={AboutUs } /> 
                    <Route path="/contactus" exact component={ContactUs } /> 
                    <Route path="/career" exact component={Career } /> 
                    <Route path="/privacy" exact component={Privacy } /> 
                </Switch>

            </div>
            <div className="footer">
                <div className="container" >
                    <ul className="d-flex flex-wrap justify-content-center">
                        <li> 
                         <NavLink 
                        exact 
                        to={{ pathname: '/aboutus' }}>About us</NavLink>
                        </li>
                        <li> 
                         <NavLink 
                        exact 
                        to={{ pathname: '/contactus' }}>Contact us</NavLink>
                        </li>
                        <li> 
                         <NavLink 
                        exact 
                        to={{ pathname: '/career' }}>Career</NavLink>
                        </li>
                        <li> 
                         <NavLink 
                        exact 
                        to={{ pathname: '/privacy' }}>Privacy Policy</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
      </div>
    );
  }

}


export default Layout;
