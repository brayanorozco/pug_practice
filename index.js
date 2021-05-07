//Get: Gets information, PUT: Changes information, POST: Posts or adds information, DELETE: Deletes information

/*
Four functions:

app.get()
app.post()
app.delete
app.put
*/
const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'pug')

let data = require("./data");

app.get("/", (req, res) => {
    res.render("index", {});
})

//-------------------------------------------------------

//users
app.get("/users", (req, res) => {
    res.render("users", {usersls:data.users});
})

//-------------------------------------------------------
//schedules
app.get("/schedules", (req, res) => {
    res.render("schedules", {times:data.schedules});
})

app.get('/schedules/:id', (req, res) => {
    
    console.log(req.params.id); //ids
    

    if(req.params.id <= 2){
        schedule = [];

        for(i=0; i < data.schedules.length; i++){

            if (data.schedules[i].user_id == req.params.id){     

                schedule.push(data.schedules[i]);
            }  
    }
    console.log(schedule);


        res.render("displayBySchedules", {user:data.users[req.params.id]});
    }

    else{
        res.json("The user doesn't exist");
    }
})

//-------------------------------------------------------
//Search for users

app.get('/users/:id', (req, res) => {

    if(req.params.id <= 2){
        res.render("displayByUsers", {user:data.users[req.params.id]});
    }
    else{
        res.json("The user doesn't exist");
    }
})

app.listen(port, () => console.log("listening on port " + port));
