import React, { useEffect, useState } from "react";
import { FaUpload, FaSearch } from "react-icons/fa";
import AddStudentDetails from "./AddStudentDetails";
import userlist  from './data/studentslist.json';
import Report from "./Report";


const StudentDetails = () => {

    const [userList, setUserList] = useState([]);
    const [searchTerm, setSearchTerm]=useState(''); 

     function PaginationComponent() {
        const [data, setData] = useState([]);
      
        const [currentPage, setcurrentPage] = useState(1);
        const [itemsPerPage, setitemsPerPage] = useState(5);
      
        const [pageNumberLimit, setpageNumberLimit] = useState(5);
        const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
        const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
      
        const handleClick = (event) => {
          setcurrentPage(Number(event.target.id));
        };
      
        const pages = [];
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
          pages.push(i);
        }
      
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
      
        const renderPageNumbers = pages.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                id={number}
                onClick={handleClick}
                className={currentPage == number ? "active" : null}
              >
                {number}
              </li>
            );
          } else {
            return null;
          }
        });
    
        useEffect(() => {
          fetch("http://127.0.0.1:8000/studentlist/")
            .then((response) => response.json())
            .then((json) => setData(json));
        }, []);
      
        const handleNextbtn = () => {
          setcurrentPage(currentPage + 1);
      
          if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
          }
        };
      
        const handlePrevbtn = () => {
          setcurrentPage(currentPage - 1);
      
          if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
          }
        };
      
        let pageIncrementBtn = null;
        if (pages.length > maxPageNumberLimit) {
          pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
        }
      
        let pageDecrementBtn = null;
        if (minPageNumberLimit >= 1) {
          pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
        }
      
        const handleLoadMore = () => {
          setitemsPerPage(itemsPerPage + 5);
        };
      
        return (
          <>
            {renderData(currentItems)}
            <ul className="pageNumbers">
              <li>
                <button
                  onClick={handlePrevbtn}
                  disabled={currentPage == pages[0] ? true : false}
                >
                  Prev
                </button>
              </li>
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
      
              <li>
                <button
                  onClick={handleNextbtn}
                  disabled={currentPage == pages[pages.length - 1] ? true : false}
                >
                  Next
                </button>
              </li>
            </ul>
          </>
        );
      }
    
    const renderData = (userList) => {
        return (
          <div className="datatable">
            <table className="studentdetailstable">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Standard</th>
                            <th>Status</th>
                            <th>Date of Vaccines</th>
                            <th>Name of Vaccine</th>
                        </tr>
                    </thead>
                    <tbody>
            {          
            userList && userList.length > 0 ?
            userList.filter((val) => {
                if(searchTerm == "") {
                    return val
                } else if (val.vaccinename.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map(usr => 
            <tr>
                    <td>{usr.id}</td>
                    <td>{usr.name}</td>
                    <td>{usr.classs}</td>
                    <td>{usr.status}</td>
                    <td>{usr.vaccinedate}</td>
                    <td>{usr.vaccinename}</td>
              </tr>  
            )
             : "Loading"
            }

            </tbody>
        </table>
        </div>      
        );
      };


    return ( 
        <div className="home">
            <h1> <span className="heading"> Add / Manage Student Details </span></h1>
            <div className="container">
            <div className="managestudents">
            <div>
            <h2 className="registered">Registered Student Details</h2>
            <div className="search dflex">
            <span className="searchtext w30"> &nbsp;  Search &nbsp; <FaSearch /> </span>   
            <input className="w70" type="text" placeholder="Search by Vaccine" onChange={event => {setSearchTerm(event.target.value)}}/>  
            </div>
                <div className="paginated-data">{PaginationComponent()}</div> 
                <Report />
            </div>    
            <AddStudentDetails />
        </div>
        </div>
     </div>
     );
}
 
export default StudentDetails;