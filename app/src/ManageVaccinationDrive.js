import React, { useEffect, useState } from "react";
import Data from './data/db.json';

const ManageVaccinationDrive = () => {

    const [drives, setDrives] = useState(null);
    const [dateofvaccine, setDateOfVaccine] = useState("");
    const [place, setPlace] = useState("");
    const [vaccinecount, setVaccineCount] = useState("");
    const [driveId,setDriveId]=useState(null);

    useEffect(() => {
           getList();
       }, []);

    function getList() {
        fetch("http://localhost:8000/drives")
           .then(res =>{
              return res.json();
            }).then(data => {
                console.log(data);
                setDrives(data);
                setDateOfVaccine(data[0].dateofvaccine);
                setPlace(data[0].place);
                setVaccineCount(data[0].vaccinecount);
                setDriveId(data[0].id); 
            })
    }   

    function deleteDrive(id) {
        fetch(`http://localhost:8000/drives/${id}`, {
            method:'DELETE'
        }).then((res)=>{
            res.json().then((data)=>{
           // console.warn(data);
            getList();
           })
        })
    }

    function selectDrive(id) {
        console.log(drives[id-1]);
        let data = drives[id-1]; 
      
        setDateOfVaccine(data.dateofvaccine);
        setPlace(data.place);
        setVaccineCount(data.vaccinecount);
        setDriveId(data.id);
      //alert(data.id );
    }

      

    function updateDrive(id){
        //let item = [driveId-1];       
        let data = {dateofvaccine,place,vaccinecount,driveId};
       
        fetch(`http://localhost:8000/drives/${driveId}`, {
            method:'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            res.json().then((data)=>{
            console.warn(data);
            getList();
           })
        })
        console.log(dateofvaccine,place,vaccinecount,driveId);
    }

    return ( 
        <div className="home">
            <h2>Vaccination Drive Details</h2>
            <div className="container">
                <div className="DriveDetails">
                <div className="updatedrive">
                    <h3 className="update">Update Vaccination Drive</h3>
                <div className="uploaddriveform">
                        <input type="date" value={dateofvaccine} onChange={(e) => setDateOfVaccine(e.target.value)} /> <br/>
                        <select name="place" value={place} onChange={(e) => setPlace(e.target.value)} >
                            <option>Please Select</option>
                            <option>Gandhi Hall</option>
                            <option>Nehru Bhavan</option>
                        </select> 
                        <input type="number" value={vaccinecount}  onChange={(e) => setVaccineCount(e.target.value)} /> <br/>
                        <button onClick={updateDrive}>Update Drive</button><br/>
                    </div>
                    </div>
                    <table className="drivedetailstable">
                        <thead>
                            <tr>
                                <th><td>S.No</td></th>
                                <th><td>Date of Vaccination</td></th>
                                <th><td>Place of Vaccination</td></th>
                                <th><td>Number of Vaccines</td></th>
                                <th><td>Actions</td></th>
                            </tr>
                        </thead>
                        <tbody>  

                            {  
                               
                                drives && drives.map((drive) => 
                                <tr className="drive-preview" key={drive.id}>
                                    <td>{drive.id}</td>
                                    <td>{drive.dateofvaccine}</td>
                                    <td>{drive.place}</td>
                                    <td>{drive.vaccinecount}</td>
                                    {  (new Date(drive.dateofvaccine) > new Date()) ? (<td> <button id="updateDisable" onClick={() => selectDrive(drive.id)
                                }>Update</button></td>) : (<td> <button disabled> Update</button></td>)  }
                                
                                </tr>
                            )}
                            
                        </tbody>
                    </table>

                   

                </div>
            </div>

        </div>
     );
}
 
export default ManageVaccinationDrive;
