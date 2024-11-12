import React, { useState } from "react";
import styles from './login.module.css'
import LoginForm from "../../components/loginForm";

type LoginProps={
    handleLoginState:(isLogined:boolean)=>void
}

const Login = (props:LoginProps) => {
    // const [isLogined,setIsLogined]=useState(false)
    const recevieLoginStatus=(status:boolean)=>{
        props.handleLoginState(status)
    }

    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <div className={styles.innerLeft} style={{textAlign:'center', marginBottom:'50px'}}>
                    <img src="./images/logo.png" />
                </div>
                <div className={styles.innerLeft}>
                    <LoginForm sendStateToLogin={recevieLoginStatus} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.introductionImage}>
                <img src="./images/introduction.png" />

                </div>
                <div className={styles.introductionText}>
                    <p style={{color:'#ff7506', fontWeight:400, fontSize:'34px'}}>Hệ thống<br/>
                    <span style={{color:'#ff7506', fontWeight:900, fontSize:'36px'}}>Quản lý xếp hàng</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Login;