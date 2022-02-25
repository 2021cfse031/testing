import React, { useEffect, useState } from "react";
import BulkUpload from "./BulkUpload";

const AddStudentDetails = () => {

   const [addingSuccess, setAddingSuccess] = useState('Please Add Student Details');

                const inititalValues = { id:0, name:"", classs:0, vaccinedate:"", vaccinename:"", status:""  };
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
                    let dump = {
                        "id":formValues.id,
                        "name":formValues.name,  
                        "classs":parseInt(formValues.classs),  
                        "vaccinedate":formValues.vaccinedate,
                        "status":formValues.status,
                        "vaccinename":formValues.vaccinename
                    }
                    console.log(formErrors);
                    if (formValues.name && formValues.classs && formValues.vaccinedate && formValues.vaccinename && formValues.status) {                    
                    setIsSubmit(true);
                    fetch('http://127.0.0.1:8000/studentlist/', {
                      method:'POST',
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(dump),
                    }).then((res) => {
                        console.log(res);
                        setAddingSuccess('Successfully Added Student Data');
                    })
                    } else {
                        console.log("Please fill all details")
                    }
                };

                useEffect(() => {
                    fetch('http://127.0.0.1:8000/studentlist/')
                    .then(res => { 
                        return res.json() })
                    .then(data => {
                        // console.log('data',data);
                        formValues.id = data.length + 1;
                        // console.log('formdata',formValues);
                    } )
                }, []);

                useEffect(() => {
                    console.log(formErrors);
                    if(Object.keys(formErrors).length === 0 && handleSubmit)
                    {
                        console.log(formValues);
                    }
                }, [formErrors]);

                const validate = (values) => {
                    const errors = {};
                    if(!values.name) {
                        errors.name = "Username is Required";
                     }
                     if(!values.classs) {
                        errors.classs = "Standard is Required";
                     }
                     if(!values.vaccinedate) {
                        errors.vaccinedate = "Date of Vaccination is Required";
                     }
                     if(!values.vaccinename) {
                        errors.vaccinename = "Name of Vaccination is Required";
                     }
                     if(!values.status) {
                        errors.status = "Status of Vaccination is Required";
                     }

                     return errors;
                };

    return ( 
        <div className="addstudent-container">
             <h2>Add Student Details</h2>
                    <div className="AddStudentDetailsForm">
                    <form onSubmit={handleSubmit} className="reset">
                        <div className="field">
                            <label>Student Name:&nbsp;&nbsp;
                            <input 
                            type="text" 
                            placeholder="Enter Name"   
                            name="name"     
                            value={formValues.name}
                            onChange={handleChange}
                            /></label>
                        </div>
                        <p className="errortext">{formErrors.name}</p>
                        <div className="field">
                            <label>Standard/Class:&nbsp;&nbsp;
                            <input type="text" 
                            value={formValues.classs}
                            name="classs"
                            onChange={handleChange}
                            /></label>
                        </div>   
                        <p className="errortext">{formErrors.classs}</p>
                        <div className="field"> 
                            <label>Date of Vaccine:&nbsp;&nbsp;
                            <input type="date" 
                            name="vaccinedate"
                            value={formValues.vaccinedate}
                            onChange={handleChange}
                            /> </label>
                        </div>
                        <p className="errortext">{formErrors.vaccinedate}</p>
                        <div className="field">    
                            <label>Name of Vaccine:&nbsp;&nbsp;
                            <select name="vaccinename" 
                            value={formValues.vaccinename}  
                            onChange={handleChange}>
                                <option>Please Select</option>
                                <option>Covaxin</option>
                                <option>Covishield</option>
                            </select> </label>
                        </div>
                        <p className="errortext">{formErrors.vaccinename}</p>
                        <div className="field">    
                            <label>Vaccination Status:&nbsp;&nbsp;
                            <select name="status" 
                            value={formValues.status} 
                            onChange={handleChange}>
                                <option>Please Select</option>
                                <option>Complete</option>
                                <option>Incomplete</option>
                            </select> </label>
                        </div>    
                        <p className="errortext">{formErrors.status}</p>
                        <button className="book-vaccine">Add Student Details</button>    
                        <p className="formsubmitmsg">{addingSuccess}</p>
                    </form>
                    </div>
                    <BulkUpload />   
         </div>    
     );
}
 
export default AddStudentDetails;

