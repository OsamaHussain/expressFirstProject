const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.engine('.html', require('ejs').__express);

app.use(express.static('public'))

const publicDirectoryPath = { root: path.join(__dirname, '/public') }

app.get('/', (req, res) => {
  res.sendFile('Home.html', publicDirectoryPath);
});

app.get('/about', (req, res) => {
    res.sendFile('About.html', publicDirectoryPath);
});

app.get('/about/:name', (req, res) => {
    res.send(`Welcome! ${req.params.name.charAt(0).toUpperCase()}${req.params.name.substring(1).toLowerCase()} to Our Site`);


    // I want to display my employee details when someone put his/her name in url like
    // localhost/about/Osama
    // So the data should be display like image of the user, his name, cnic number, father name, about, interests, and these type of more details.
    // if user not exist show 404 error on screen...
    // I have created a sepreate file for this in JSON format where data can be fetch and insert into html page.


    // const name = req.params.name.toLowerCase();
    // const filePath = path.join(__dirname, 'employee.json');
    // console.log(__dirname);
    // // const filePath = publicDirectoryPath + 'employee.json';

    // fs.readFile(filePath, 'utf8', (err, data) => {
    //   try {
    //     const jsonData = JSON.parse(data);
    //     const employee = jsonData.find(e => e.name.toLowerCase() === name);
    //     if (!employee) {
    //       res.status(404).send(`No employee found with the name "${name}"`);
    //       return;
    //     }
    //     const fileName = 'Employee.html';
    //     const options = { 
    //       root: path.join(__dirname, 'public'),
    //     };
    //     res.sendFile(fileName, options, (err) => {
    //       if (err) {
    //         console.error(err);
    //         res.status(500).send('An error occurred while sending the file');
    //       }
    //     });
    //   } catch (e) {
    //     console.error(e);
    //     res.status(500).send('An error occurred while parsing the data');
    //   }
    // });



    // res.sendFile('Employee.html', publicDirectoryPath);
    // res.sendFile();
    
    // res.send(`Welcome! ${req.params.name.charAt(0).toUpperCase()}${req.params.name.substring(1).toLowerCase()} to Our Site`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});