const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.get('/api/test', (req, res) => {
    res.json({ text: "Hello World snake" });
 });
 
 app.get('/api/test/:id/:navn', (req, res) => {
    console.log(req.params.id, req.params.navn);
    res.json({ param: req.params.id });
 });



 app.get('/api/profil', (req, res) => {
    res.json({
        fornavn: "Mille",
        efternavn: "Helbo",
        by: "København",
        alder: "17"
    
    });

    app.get('/api/drik', (req, res) => {
        res.json({ drik: "Vitamin Well" });
     });

     app.get('/api/kage', (req, res) => {
        res.json({ text: "Drømmekage" });
     });
 });

 
 

app.use(express.static('public'));


app.listen(3000, (err) => {
    if (err) {
       console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
 });