import React, { Component } from 'react';
import Input from '../components/reusablecomponents/inout/Input'


class ContactUs extends Component {
    state = {
        formData: {
            name: {
                label: "Name",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: " Your name"
                },
                value: '',
                validation:{
                    required : true,
                    minLength : 6
                },
                valid : false
            },
            email: {
                label: 'Email Id',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: " Your email"
                },
                value: '',
                validation:{
                    required : true
                },
                valid : false
            },
            country:{
                label: 'Country',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: " Your Country"
                },
                value: '',
                validation:{
                    required : true
                },
                valid : false
            },
            state: {
                label: 'State',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: " Your State"
                },
                value: '',
                validation:{
                    required : true
                },
                valid : false
            },
            city : {
                label: 'City',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: " Your City"
                },
                value: '',
                validation:{
                    required : true
                },
                valid : false
            },
            mobile: {
                label: 'Mobile',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: " Your number"
                },
                value: '',
                validation:{
                    required : true
                },
                valid : false
            },
            deliveryMethod: {
                label: 'Delivery method',
                elementType: 'select',
                elementConfig : {
                    options : [
                        {value: 'fastest' , displayValue: 'Fastest'},
                        {value: 'cheapest' , displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        }
    }
    updateChange = ( e, inputIdentifier) =>{
        const updateFormArray = {
            ...this.state.formData
        } 
        const updateValue  = {
            ...updateFormArray[inputIdentifier]
        }
        updateValue.value = e.target.value;
        updateValue.valid = this.checkValidity(updateValue.value , updateValue.validation);
        console.log(updateValue, "updte");
        updateFormArray[inputIdentifier] = updateValue;
        this.setState({
            formData: updateFormArray
        })
        console.log(updateFormArray)
    }

    submitHandler = (event) =>{
        event.preventDefault();
        const formData = {};
        for(let formIdentifier in this.state.formData){
            formData[formIdentifier] = this.state.formData[formIdentifier].value;
        }
        const order ={
            formvalue: formData
        }
        console.log(order, "order");
    }

    checkValidity= (value, rules) =>{
        let isValid = true;
        if(rules.required) {
            isValid =  value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        return isValid;
    }
  
    render() {
        const formDataArray =[];
        for(let item in this.state.formData){
            formDataArray.push({
                id: item,
                config: this.state.formData[item]
            });
        }
        console.log(formDataArray, "formDataArray")
        let form =(
            <form onSubmit={this.submitHandler}>
                {formDataArray.map(element => {
                    return  <Input 
                    key={element.id}
                    elementtype={element.config.elementType} 
                    elementconfig={element.config.elementConfig} 
                    value={element.config.value} 
                    changed={(event) => this.updateChange(event , element.id)} />
                })}
                <div className="text-center p-4">
                <button >Submit</button>
                </div>
            </form>
        )
      return (
        <div className="container mb-4 mt-4" >
            <div className="card col-md-6 m-auto pt-4 mb-4">
             <h4 className="text-center">Contact Form</h4>
            {form}
            </div>
        </div>
      )
    }
  
  }


    export default ContactUs;
