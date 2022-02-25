import React, { useState, useEffect } from "react";
import ManageVaccinationDrive from "./ManageVaccinationDrive";

const BookVaccinationDrive = () => {

    const [bookingSuccess, setBookingSuccess] = useState('Please Submit to Book Vaccination Drive');

                const handleClick = () => {
                    setBookingSuccess('Booking Successful');
                }

                const inititalValues = { id:0, dateofvaccine:"", place:"", vaccinecount:0 };
                const [formValues, setFormValues] = useState(inititalValues);
                const [formData, setformData] = useState([]);
                const [formErrors, setFormErrors] = useState({});
                const [isSubmit, setIsSubmit] = useState(false);
      
                const handleChange = (e) => {
                    const {name,value} = e.target;
                    setFormValues({...formValues, [name]:value});
                };
                
                const handleSubmit = (e) => {
                    e.preventDefault();
                    setFormErrors(validate(formValues));
                    console.log(formValues.place);
                    let dump = {
                        "id":formValues.id,
                        "dateofvaccine":formValues.dateofvaccine,  
                        "place":formValues.place,  
                        "vaccinecount":parseInt(formValues.vaccinecount)
                    }
                    console.log('dump=',dump)
                    if (formValues.dateofvaccine && formValues.place && formValues.vaccinecount ) {                    
                    setIsSubmit(true);
                    fetch('http://127.0.0.1:8000/drivelist/', {
                      method:'POST',
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(dump),
                    }).then((res) => {
                        console.log('res',res);
                        setBookingSuccess('Booked Vaccination Drive');
                    })
                    } else {
                        console.log("Please fill all details")
                    }
                };

                useEffect(() => {
                    fetch('http://127.0.0.1:8000/drivelist/')
                    .then(res => { 
                        return res.json() })
                    .then(data => {
                        // console.log('data',data);
                        formValues.id = data.length + 1;
                        // console.log('formdata',formValues);
                    } )
                }, []);

                useEffect(() => {
                    // fetch('', {
                    //     method:'GET'
                    // }).then((response) => 
                    //     console.log('response',response),
                    //     setformData(response),
                    //     formValues.id = formData.length,
                    //     console.log('formdata',formData),
                    //     console.log(formValues.id)
                    // )
                    console.log(formErrors);
                    if(Object.keys(formErrors).length === 0 && handleSubmit)
                    {
                        console.log(formValues);
                    }
                }, [formErrors]);

                const validate = (values) => {
                    const errors = {};
                    if(!values.dateofvaccine) {
                        errors.dateofvaccine = "Date is Required";
                     }
                     if(!values.place) {
                        errors.place = "Place is Required";
                     }
                     if(!values.vaccinecount) {
                        errors.vaccinecount = "Number of Vaccines is Required";
                     }
                     
                     return errors;
                };
    return ( 
        <div className="manage-drive">
            <h1 className="heading">Manage Vaccination Drive</h1>
            <div className="container">
                <div className="dflex justify-evenly">
                    <div className="ManageVacDriveForm">
                     <h2>Book Vaccination Drive</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                        <label>Date of Vaccination: &nbsp;
                        <input 
                        type="date" name="dateofvaccine"
                        value={formValues.dateofvaccine} 
                        onChange={handleChange}                       
                        /> </label>
                        </div>
                        <p className="errortext">{formErrors.dateofvaccine}</p>
                        <div className="field">
                        <label>Place of Vaccination: &nbsp;
                        <select name="place"
                        value={formValues.place} 
                        onChange={handleChange} >
                            <option>Please Select</option>
                            <option>Gandhi Hall</option>
                            <option>Nehru Bhavan</option>
                        </select> </label> 
                        </div>
                        <p className="errortext">{formErrors.place}</p>
                        <div className="field">
                        <label>Number of Vaccines: &nbsp;
                        <select name="vaccinecount"
                        value={parseInt(formValues.vaccinecount)} 
                        onChange={handleChange} >
                            <option>Please Select</option>
                            <option>250</option>
                            <option>100</option>
                        </select> </label> 
                        </div>
                        <p className="errortext">{formErrors.vaccinecount}</p>
                        <button className="book-vaccine">Book Drive</button>    
                        <p>{bookingSuccess}</p>

                    </form>
                    </div>
                    <ManageVaccinationDrive />
                </div>    
            </div>
        </div>
     );
}
 
export default BookVaccinationDrive;


/// date of vaccination , place, number of vaccines 