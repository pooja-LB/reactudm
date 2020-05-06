import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';
import {STORE_RESULT, DELETE_RESULT} from "../store/actions/resultsAction";
import {INCREMENT, DECREMENT, ADD, SUB} from "../store/actions/counterAction";


    const Sidebar = (props) => {
      return (
        <div className="container">
            <h1>Events</h1>
            <h2 className="text-center p-3 text-danger border m-2 mb-4 bg-light">Counter:{props.ctr}</h2 >

            <div className="d-flex">
                  <div className="col-md-8">
                    <div className="maindiv pointer p-4 mb-4 bg-warning" onClick={props.increment}>
                        <strong> Increment 1</strong>
                    </div>
                    <div className="maindiv pointer p-4 mb-4 bg-warning" onClick={props.add}>
                          <strong> Add 10</strong>
                    </div>
                    <div className="maindiv pointer p-4 mb-4 bg-warning" onClick={props.sub}>
                          <strong> Subtract 10</strong>
                    </div>
                    <div className="maindiv pointer p-4 mb-4 bg-warning" onClick={props.decrement}>
                          <strong> Decrement 1</strong>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-danger" onClick={() => props.storeResult(props.ctr)}>Store Results</button>
                    <ul>
                      {props.results.map(res=>{
                      return  <li onClick={() => props.deleteResult(res.id)} key={res.id}>{res.value}</li>
                      })}
                    
                    </ul>
                  </div>
              </div>
        </div>
      )
    };

const mapStateToProps = state =>{
  return{
    ctr: state.ctr.counter,
    results : state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return{
    increment : () => dispatch(INCREMENT()),
    decrement : () => dispatch(DECREMENT()),
    add : () => dispatch(ADD(10)),
    sub : () => dispatch(SUB(10)),
    storeResult : (result) => dispatch(STORE_RESULT(result)),
    deleteResult : (id) => dispatch(DELETE_RESULT(id))
  };

};

    export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);