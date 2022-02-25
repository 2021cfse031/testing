import react from "react";
import { useState, useEffect } from "react";
import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import students from './data/studentslist.json';

const Piechart = () => {

    const [chart, setChart] = useState({})

    useEffect(() => {
        fetch('http://127.0.0.1:8000/list/')
        .then(res => { 
            return res.json() })
        .then(data => {
            setChart(data);
        } )
    }, []);

    let studentsVaccinated = 0;
  
    for(const i in chart){
        if (chart[i].status === "complete") {
            studentsVaccinated ++;
        }
    }

    var data = {
        labels: ["Total Students Registered", "Students Vaccinated"],
        datasets: [{
          label:  'Heading',
          data: [chart.length, studentsVaccinated],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      };
    
      var options = {
        maintainAspectRatio: false,
        display:true,
        scales: {
            yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }

    return ( 
    <div className="Piechart-container">
    <h2>Student Vaccination Status</h2>
    <div>
      <Pie className='piechart'
        data={data}
        height={400}
        options={options}

      />
    </div>
    </div>
     );
}
 
export default Piechart;