import React from 'react';
import classes from  './input.css';
  
    const Input = (props) =>{

        let inputElement = null;
        switch(props.elementtype){
            case('input'):
            inputElement = <input className="InputElement" {...props.elementconfig} value={props.value} onChange={props.changed}/>
            break;

            case('textArea'):
            inputElement = <textarea className='InputElement' {...props.elementconfig} value={props.value} onChange={props.changed}/>;
            break;

            case('select'):
            inputElement = ( <select className="InputElement" style={{padding: '4px'}} {...props.elementconfig} value={props.value} onChange={props.changed}>
                { 
                props.elementconfig.options.map(option => (
                     <option value={option.value}> 
                     {option.displayValue}
                     </option>
                ))}
            </select>
            );
            break;
            default:
                inputElement = <input className="InputElement" {...props.elementconfig} value={props.value}/>
        }

        return(
            <div className=" ">
                <div className="Input">
                    <label className="Label">{props.elementconfig.label}</label>
                    {inputElement}
                </div>
            </div>
        )
           
 }
    
     
 export default Input;
