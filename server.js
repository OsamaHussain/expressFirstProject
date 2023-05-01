const express = require('express');
const path = require('path');
const fs = require('fs');
const { log } = require('console');
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

  fs.readFile("./employee.json", "utf8", (err, jsonString) => {

    var data = null;
    const newJson = JSON.parse(jsonString);
    for(var i = 0; i < newJson.length; i++){
      if(newJson[i].name.toLowerCase() == req.params.name.toLocaleLowerCase()){
        data = newJson[i];
      }
    }
    if(data == null){
      return res.status(404).sendFile('/404.html', publicDirectoryPath);
    }else {
      res.render(__dirname  + '/public/Employee.html', {data : data});
    }
    // res.send(data);
  });
});

app.get('/about/json/:name', (req, res) => {

  fs.readFile("./employee.json", "utf8", (err, jsonString) => {

    var data = null;
    const newJson = JSON.parse(jsonString);
    for(var i = 0; i < newJson.length; i++){
      if(newJson[i].name.toLowerCase() == req.params.name.toLocaleLowerCase()){
        data = newJson[i];
      }
    }
    if(data == null){
      return res.status(404).sendFile('/404.html', publicDirectoryPath);
    }else {
      res.send(data);
    }
    ;
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});