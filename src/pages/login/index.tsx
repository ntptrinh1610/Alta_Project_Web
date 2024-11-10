import React from "react";
import './style.css'
import LoginForm from "../../components/loginForm";

const Login = () => {
    return (
        <div className="container">

            <div className="left">
                <div className="innerLeft" style={{textAlign:'center', marginBottom:'50px'}}>
                    <img src="./images/logo.png" />
                </div>
                <div className="innerLeft">
                    <LoginForm />
                </div>
            </div>
            <div className="right">
                <div className="introductionImage">
                <img src="./images/introduction.png" />

                </div>
                <div className="introductionText">
                    <p style={{color:'#ff7506', fontWeight:400, fontSize:'34px'}}>Hệ thống<br/>
                    <span style={{color:'#ff7506', fontWeight:900, fontSize:'36px'}}>Quản lý xếp hàng</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Login;