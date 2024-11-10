import React, { useEffect, useState } from "react";
import './style.css'
import { Table } from "antd";
import MyCalendar from "../../components/myCalendar";
import { resolve } from "path";

const Dashoard = () => {
    const [degree, setDegree] = useState(100)
    const [data,setData]=useState<any[]>([])
    const [itemCount,setItemCount]=useState(-1)

    const columns = [
        {
          title: 'Id',
          dataIndex: 'matruong',
          key: 'matruong',
        },
        {
          title: 'Lĩnh vực',
          dataIndex: 'tentruong',
          key: 'tentruong',
        },
        {
          title: 'Viết tắt',
          dataIndex: 'diachi',
          key: 'diachi',
        },
      ];
    // const columns = [
    //     {
    //       title: 'Id',
    //       dataIndex: 'id',
    //       key: 'id',
    //     },
    //     {
    //       title: 'Lĩnh vực',
    //       dataIndex: 'tenmonhoc',
    //       key: 'tenmonhoc',
    //     },
    //     {
    //       title: 'Viết tắt',
    //       dataIndex: 'abbreation',
    //       key: 'abbreation',
    //     },
    //   ];

    const  getDataFromApi = () => {
        fetch('https://internship-api.dev.altasoftware.vn/api/university', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(response => response.json())
        .then(data=>{ 
            console.log(data)
            setData(data)
        })
    }
    const filterHCMcity=data.filter((data)=>{
        return data.diachi.includes('HCM')
    })


    useEffect(() => {
        getDataFromApi()
    }, [])

    useEffect(() => {
        
        const setTotalItem= async():Promise<number>=>{
            return new Promise(resolve=>{
                setTimeout(() => {
                    resolve(data.length)
                }, 2000)
            })
        }



        // async function setTotalItem(){
        //     return new Promise(resolve=>{
        //         setTimeout(() => {
        //             resolve(data.length)
        //         }, 2000)
        //     })
        // }
        setTotalItem().then((data:any)=>setItemCount(data))
    }, [data])
    return (
        <div className="container">
            <div className="left">

            </div>
            <div className="middle">
            <Table dataSource={filterHCMcity} columns={columns} />;
            <p>Tổng số trường tại thành phố Hồ Chí Minh: {itemCount=== -1 ? 'Loading...' : itemCount }</p>

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
                            <p>4221</p>
                            <p>Thiết bị</p>
                        </div>
                        <div className="columnText">
                            <p>Đang hoạt động</p>
                            <p>Ngừng hoạt động</p>
                        </div>
                        <div className="columnEnd">
                            <p style={{ color: '#ff7506', fontSize: '14px', fontWeight: 600 }}>3779</p>
                            <p style={{ color: '#ff7506', fontSize: '14px', fontWeight: 600 }}>422</p>
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
                            <p>210</p>
                            <p>66</p>
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
    )
}

export default Dashoard;