import React, { Component } from 'react'



class EmployeeForm extends Component {


    state = {
        name: '',
        email: '',
        contact: '',
        pic: '',
        formError: {
            name: "Please Enter Name",
            email: "Please Enter Email",
            contact: "Please Enter Contact"
        }
    }

    tfHandler = (evt) => {
        // console.log(evt.target);
        // let name = evt.target.name;
        // let value = evt.target.value;

        // console.log(name, value);

        // let modifiedState = {};
        // modifiedState[name] = value;
        // console.log("modified state ", modifiedState);
        // this.setState(modifiedState);


        let { name, value } = evt.target;
        this.setState({ [name]: value });
        let { formError } = this.state;

        switch (name) {
            case 'name':
                if (!value || name.length === 0) {
                    formError.name = "Name Required";
                } else if (value.length < 3 || value.length > 20) {
                    formError.name = "Name should be between 3 to 20 chars"
                } else {
                    formError.name = '';
                }
                break;
            case 'email':
                break;
            case 'contact':
                break;
            default:
                console.log("Wrong field...");
                break;
        }

        this.setState({ [name]: value, formError });
    }

    render() {
        return (
            <div className='container'>
                <h3 className='alert alert-success'>Employee Form (Controleld Component) </h3>
                <form className='form'>

                    <div className="form-group row">
                        <label htmlFor="name" className="control-label col-md-4">Name </label>
                        <div className="col-md-8">
                            <input type="text" name="name" className="form-control" onChange={this.tfHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="control-label col-md-4">Email </label>
                        <div className="col-md-8">
                            <input type="text" name="email" className="form-control" onChange={this.tfHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="contact" className="control-label col-md-4">Contact number </label>
                        <div className="col-md-8">
                            <input type="text" name="contact" className="form-control" onChange={this.tfHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="pic" className="control-label col-md-4">Picture </label>
                        <div className="col-md-8"><input type="text" name="pic" className="form-control" />
                        </div>
                    </div>

                    <button className='btn btn-primary'>Save</button>

                </form>


                <div className='row'>
                    <h3>Current State</h3>
                    <pre>{JSON.stringify(this.state, null, 3)}</pre>

                </div>

            </div>
        );
    }
}

export default EmployeeForm;