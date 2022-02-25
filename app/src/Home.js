import React, { useEffect, useState } from "react";
import PieChart from './Piechart';
import axios from "axios";

const url = 'http://127.0.0.1:8000/drivelist/'

const Home = () => {

    const [dateFlag, setDateFlag] = useState(0);
    const [drivesdata, setdrivesData] = useState('');

    const currentdate = new Date();
    const date = `${currentdate.getFullYear()}-${currentdate.getMonth()+1}-${currentdate.getDate()}`;

    useEffect(() => {
        fetch(url)
        .then(res => { 
            return res.json() })
        .then(res => {
            setdrivesData(res);
            console.log(res);
            console.log('drivedata', drivesdata);
        } )
    }, []);

    return ( 
        <div className="home">
        <h1> <span className="heading"> Dashboard </span></h1>
        <div className="container">
            <div className="Flex">
                <PieChart />
                <div>
                <h2>Upcoming Vaccination Drives</h2>
                <table className="drivedetailstable">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Date of Vaccination</th>
                        <th>Place</th>
                        <th>Number of Vaccines</th>
                    </tr>
                </thead>
                <tbody>
                    {  drivesdata && drivesdata.filter((drives) => {
                    return (
                        new Date(drives.dateofvaccine) > new Date()
                    );
                    }).map(usr => 
                    <tr>
                        <td>{usr.id}</td>
                        <td>{usr.dateofvaccine}</td>
                        <td>{usr.place}</td>
                        <td>{usr.vaccinecount}</td>
                    </tr>
                    )
                }
                </tbody>
                </table>
                </div>
            </div>    
        </div>

    </div>
     );
}
 
export default Home;