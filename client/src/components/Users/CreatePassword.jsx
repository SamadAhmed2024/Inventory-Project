
import React, {Fragment, useRef} from 'react';
import {ErrorToast, IsEmpty} from "../../helper/FormHelper";
import {RecoverResetPassRequest} from "../../APIRequest/UsersAPIRequest";
import {getEmail, getOTP} from "../../helper/SessionHelper";
import {useNavigate} from "react-router-dom";
import {Toaster} from "react-hot-toast";
const CreatePassword = () => {

    let PasswordRef,ConfirmPasswordRef=useRef();
    let navigate=useNavigate();

    const ResetPass =async () => {
        let Password = PasswordRef.value;
        let ConfirmPassword =  ConfirmPasswordRef.value;
        if(IsEmpty(Password)){
            ErrorToast("Password Required")
        }
        else if(IsEmpty(ConfirmPassword)){
            ErrorToast("Confirm Password Required")
        }
        else if(Password!==ConfirmPassword){
            ErrorToast("Password & Confirm Password Should be Same")
        }
        else{
            let result= await RecoverResetPassRequest(getEmail(),getOTP(),Password);
            if(result===true){
                navigate("/Login")
            }
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-start col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4>SET NEW PASSWORD</h4>
                                <br/>
                                <label>Your email address</label>
                                <input readOnly={true} value={getEmail()} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <label>New Password</label>
                                <input  ref={(input)=>PasswordRef=input} placeholder="New Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <label>Confirm Password</label>
                                <input  ref={(input)=>ConfirmPasswordRef=input} placeholder="Confirm Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={ResetPass} className="btn w-100 btn-success">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster/>
            </div>
        </Fragment>
    );
};
export default CreatePassword;
