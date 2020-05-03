import React, { Component } from 'react';



class Contacts extends Component {
  state = {
    contacts: [],
    dashEvents: [
        {name:"Contacts" , path: "/contacts"},
        {name:"Arithmatic Events" , path: "/events"}
    ]
  }

  componentDidMount() {
    console.log(this.props)
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div>
        <center><h1>Contact List</h1></center>
        <div className="d-flex flex-wrap text-left justify-content-center">
          {this.state.contacts.map((contact) => (
              <div className="card m-2 pt-2 pb-2 pl-2" style={{width: '250px'}}>
                <div className="card-body p-2">
                  <h6 className="card-title text-center"><strong> <u> {contact.name} </u></strong></h6>
                  <p className="card-subtitle mb-2 text-muted">{contact.email}</p>
                  <p className="card-text" style={{fontSize: '0.9em'}}>{contact.company.catchPhrase}</p>
                </div>
              </div>
          ))}
          </div>
    </div>
      );
    }
  }

export default Contacts;