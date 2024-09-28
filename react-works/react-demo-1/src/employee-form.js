import React, { Component } from 'react'



class EmployeeForm extends Component {

    render() {
        return (
            <div className='container'>
                <h3 className='alert alert-success'>Employee Form (Controleld Component) </h3>
                <form className='form'>
                    <div className="form-group row">
                        <label htmlFor="name" className="control-label col-md-4">Name </label>
                        <div className="col-md-8">
                            <input type="text" name="name" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="control-label col-md-4">Email </label>
                        <div className="col-md-8">
                            <input type="text" name="email" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="contact" className="control-label col-md-4">Contact number </label>
                        <div className="col-md-8"><input type="text" name="contact" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="pic" className="control-label col-md-4">Picture </label>
                        <div className="col-md-8"><input type="text" name="pic" className="form-control" />
                        </div>
                    </div>

                    <button className='btn btn-primary'>Save</button>

                </form>
            </div>
        );
    }
}

export default EmployeeForm;