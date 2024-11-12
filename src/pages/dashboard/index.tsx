import React, { useEffect, useState } from "react";
import './style.css'
import { Table } from "antd";
import MyCalendar from "../../components/myCalendar";
import { resolve } from "path";
import Device from "../../components/device";

const Dashoard = () => {
    const [degree, setDegree] = useState(100)
    const [degreeService, setDegreeService] = useState(100)
    const [data, setData] = useState<any>({})
    const [dataService, setDataService] = useState<any>({})
    const [selectedIndex, setSelectedIndex] = useState(0)
    const token = localStorage.getItem('token')


    const getDataFromAPI = () => {
        fetch('https://192.168.80.188:7251/api/Device/devicesinfor', {
            method: 'GET',
            //
            headers: {
                //tra ve json
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }).then(response => {
            if(response.status===401){
                localStorage.clear()
                window.location.reload()
            }else
                return response.json()})
            .then(data => {
                setDegree(Math.round((data?.active / data?.total) * 360))
                setData(data)
            })
            .catch(error => console.log(error))
    }

    const getServiceInfo = () => {
        fetch('https://192.168.80.188:7251/api/Service/serviceinfor', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(data => {
                setDegreeService(Math.round((data?.active / data?.total) * 360))
                setDataService(data)
            })
    }

    useEffect(() => {
        getServiceInfo();
        getDataFromAPI();
    }, [])


    return (
        <div className="container">
            <div className="left">
                <div>
                    <ul>
                        <li><a href="#" onClick={() => setSelectedIndex(0)}>Dashboard</a></li>
                        <li><a href="#" onClick={() => setSelectedIndex(1)}>Thiết bị</a></li>
                        <li><a href="#" onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
            {selectedIndex === 0 ?
                <div className="rightContainer">
                    <div className="middle">

                    </div>
                    <div className="right">
                        <div className="user">
                            <img src="./images/bell.png" alt="" />
                            <img className="avatar" src="./images/logo.png" alt="" />
                            <div className="userName">
                                Xin chào <br /> <span style={{ fontWeight: 800 }}>Lê Quỳnh Ái Vân</span>
                            </div>
                        </div>
                        <div className="info">
                            <div className="header">
                                <h3 style={{ color: '#ff7506', fontSize: '24px', fontWeight: 600 }}>Tổng quan</h3>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <div className="columnFirst"
                                        style={{ background: `conic-gradient(red 0deg ${degree}deg, transparent ${degree}deg 360deg)` }}
                                    >
                                        <div className="cover-circle">
                                            <div className="first-circle"
                                                style={{ background: `conic-gradient(gray 0deg ${360 - degree}deg, transparent ${360 - degree}deg 360deg)` }}

                                            >
                                                <div className="inner-circle">
                                                    <p style={{ fontSize: '12px' }}>{Math.round(degree * 100 / 360)}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column1">
                                    <p>{data?.total}</p>
                                    <p>Thiết bị</p>
                                </div>
                                <div className="columnText">
                                    <p>Đang hoạt động</p>
                                    <p>Ngừng hoạt động</p>
                                </div>
                                <div className="columnEnd">
                                    <p style={{ color: '#ff7506', fontSize: '14px', fontWeight: 600 }}>{data?.active}</p>
                                    <p style={{ color: '#ff7506', fontSize: '14px', fontWeight: 600 }}>{(data?.total) - (data?.active)}</p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="column">
                                    <div className="columnFirst"
                                        style={{ background: `conic-gradient(red 0deg ${degreeService}deg, transparent ${degreeService}deg 360deg)` }}
                                    >
                                        <div className="cover-circle">
                                            <div className="first-circle"
                                                style={{ background: `conic-gradient(gray 0deg ${360 - degreeService}deg, transparent ${360 - degreeService}deg 360deg)` }}

                                            >
                                                <div className="inner-circle">
                                                    <p style={{ fontSize: '12px' }}>{Math.round(degreeService * 100 / 360)}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column1">
                                    <p>{dataService.total}</p>
                                    <p>Dịch vụ</p>
                                </div>
                                <div className="columnText">
                                    <p>Đang hoạt động</p>
                                    <p>Ngừng hoạt động</p>
                                </div>
                                <div className="columnEnd">
                                    <p>{dataService.active}</p>
                                    <p>{dataService.total - dataService.active}</p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="column">
                                    <div className="columnFirst"
                                        style={{ background: `conic-gradient(red 0deg ${degree}deg, transparent ${degree}deg 360deg)` }}
                                    >
                                        <div className="cover-circle">
                                            <div className="first-circle"
                                                style={{ background: `conic-gradient(gray 0deg ${360 - degree}deg, transparent ${360 - degree}deg 360deg)` }}

                                            >
                                                <div className="inner-circle">
                                                    <p style={{ fontSize: '12px' }}>{Math.round(degree * 100 / 360)}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column1">
                                    <p>4221</p>
                                    <p>Thiết bị</p>
                                </div>
                                <div className="columnText">
                                    <p>Đang hoạt động</p>
                                    <p>Ngừng hoạt động</p>
                                </div>
                                <div className="columnEnd">
                                    <p>3779</p>
                                    <p>422</p>
                                </div>

                            </div>
                        </div>
                        <div className="row ">
                            <MyCalendar />
                        </div>
                    </div>
                </div>
                :
                <div className="rightContainer">
                    <Device />
                </div>
            }
        </div>
    )
}

export default Dashoard;