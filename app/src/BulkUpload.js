import { useState } from 'react';
import StudentDetails from './StudentDetails';

export default function BulkUpload(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }

    return(
        <div className='container'>
            <h2>Bulk Upload</h2>
            <div className='Flex'>
                <form id='csv-form'>
                <div className='Flex'>  
                    <input
                        type='file'
                        accept='.csv'
                        id='csvFile'
                        onChange={(e) => {
                            setCsvFile(e.target.files[0])
                        }}
                    >
                    </input>
                    <br/>
                    <button className='uploadfilebtn'
                        onClick={(e) => {
                            e.preventDefault()
                            if(csvFile)submit()
                        }}
                    >
                        Submit
                    </button> 
                    </div>
                    <br/>
                    <br/>
                    {csvArray.length>0 ? 
                    <>
                        <table>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Standard</th>
                                <th>Status</th>
                                <th>Date of Vaccine</th>
                                <th>Name of Vaccine</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    csvArray.map((item, i) => (
                                        <tr key={i}>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.name}</td>
                                            <td>{item.class}</td>
                                            <td>{item.status}</td>
                                            <td>{item.vaccinedate}</td>
                                            <td>{item.vaccinename}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </> : null}
                </form>
            </div>    
        </div>
    );

}