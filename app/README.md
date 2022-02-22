# Cowin18-group5-assignment2


Project Name & Pitch
Group - 5 - Student Coordinator landing page

This Project is a sub-task of COWIN vaccination web application specially designed to conduct and serve vaccination drives for school students. This project majorly focuses on the Student Coordinator role in web application who is responsible for managing vaccination drives at school level. 

A School coordinator upon successful login gets navigated to the landing page which contains a dashboard of vaccinated students data, updates upcoming vaccination drives through a form submission, exports user data via CSV format, adds and manages student details.

This application is built with React, Javascript and CSS.

Project Screenshots

![bulkupload](https://user-images.githubusercontent.com/94062868/152695713-416c970a-11dc-4f6a-9215-dbeb1bd8bdea.PNG)
![dashboard](https://user-images.githubusercontent.com/94062868/152695716-700a3e87-2e34-4f90-9b74-2ac1900e571a.PNG)
![generatereport](https://user-images.githubusercontent.com/94062868/152695718-ff2043cd-bfa9-4710-833e-5cd17f6c45d4.PNG)
![managevaccinationdrive](https://user-images.githubusercontent.com/94062868/152695719-2f93ebc2-f01f-4103-a119-920fd060e848.PNG)
![studentdetails](https://user-images.githubusercontent.com/94062868/152695720-c07db9d5-7bcf-40c1-95e9-da820e8c14a1.PNG)
![studentdetails-errors](https://user-images.githubusercontent.com/94062868/152695721-f7411a1b-b514-4e7e-aeee-b0ab7b88b9fd.PNG)
![studentdetails-search](https://user-images.githubusercontent.com/94062868/152695723-4d4c12c5-8a12-49cd-a7fe-8363f2e12d26.PNG)
![studentdetails-upload](https://user-images.githubusercontent.com/94062868/152695724-907d0bd8-a33c-49b9-8d0f-898ad980f27c.PNG)
![updatedrive](https://user-images.githubusercontent.com/94062868/152695725-93941bb6-abdb-4428-878a-67baef9b8330.PNG)
![updatedrive-disabled](https://user-images.githubusercontent.com/94062868/152695726-5606f7ac-b3ee-43ae-83e2-da7d252953a3.PNG)
![addstudents](https://user-images.githubusercontent.com/94062868/152695727-55194db9-f63e-4000-b7a9-df13e495c14b.PNG)
![bookdrive](https://user-images.githubusercontent.com/94062868/152695728-9c73ce7f-6751-484e-8fd1-49741f10acaf.PNG)
![bookdrive-errors](https://user-images.githubusercontent.com/94062868/152695729-f0fbf747-339b-42d5-ac23-d9fe78d8b3fc.PNG)
![studentdetails-download](https://user-images.githubusercontent.com/94062868/152695751-c2b11b02-8bcf-4a39-b427-77a2d4b4973e.png)
![updatedisabled](https://user-images.githubusercontent.com/94062868/152695755-444d4d08-4861-4cc1-bc0f-2451b904e2ad.png)


Installation and Setup Instructions

Clone download this repository. You will need node and npm installed globally on your machine.

Installation
—------------
npm install
npm install react-router-dom@5
npm install react-icons --save
npm install --save react-chartjs-2 chart.js
npm i -g json-server


To Start Server:
—------------------
Navigate to path: group5-app and then type the below command
npm start


To Start JSON Server:
—---------------------------
Navigate to path:src/data and then type the below command
npx json-server --watch studentslist.json --port 8001
npx json-server --watch drives.json --port 8000


To Visit App:
localhost:3000/home


To Check Bulk Upload use "upload.csv" file in this repo

Reflection
—-------------------
This was a three week project built during the module of Front end frameworks in Web Development using React JS. Project goals include building a landing page for Student Coordinator who manages vaccination drives with the help of this project. 

One of the major challenges for me was the javascript code. Coming from a non-CS background, getting the root concepts of javascripts and react was tough. The epic stories given to build this assignment helped me in splitting the content into smaller components which resulted in granular component level foundation to build a basic react app with states and hooks. 

During the final stage of this assignment, I could understand some of the stand out use case scenarios like Pagination, Bulk Data upload, Bulk data download, fetching the data from JSON file and dynamically updating the content using setState methods.



