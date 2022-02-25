import React from 'react'
import student from './data/studentslist.json'

const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType })

  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}

const exportToCsv = e => {
  e.preventDefault()

  // Headers for each column
  let headers = ['Name,Status,Vaccinedate,Vaccinename']

  // Convert users data to a csv
  let usersCsv = student.students.reduce((acc, user) => {
    const { name, status, vaccinedate, vaccinename } = user
    acc.push([name, status, vaccinedate, vaccinename].join(','))
    return acc
  }, [])

  downloadFile({
    data: [...headers, ...usersCsv].join('\n'),
    fileName: 'students.csv',
    fileType: 'text/csv',
  })
}

function Report() {
  return (
    <div className='App'>
      <h1 className='heading'>Generate Vaccination Report</h1>
      <div className='actionBtns dflex justify-center'>
        <h2>Download Data</h2>
        <button className='download' type='button' onClick={exportToCsv}>
          Export to CSV
        </button>
      </div>
    </div>
  )
}

export default Report;