import React, { Component } from 'react';

class Dashboard extends Component {
  state = {
    dashEvents: [
        "Home",
        "Contacts",
        "Arithmatic Events",
        "Users"
    ]
  }

  render() {
    return (
        <div>
        <div className="d-flex flex-wrap bg-dark text-white justify-content-center">
          {this.state.dashEvents.map((events) => (
              <div className=" m-2 pt-4 pb-4 pl-2 border" style={{width: '200px'}}>
                  <strong> {events} </strong>
              </div>
          ))}
          </div>
      </div>
    );
  }

}


export default Dashboard;

