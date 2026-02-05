"use strict";
import express from 'express';

const users =[
    {
        id: 1,
        nam: "Samar Yousef",
        email: "samar@iad.com",
    }
];

const router = (app) =>{
    const options ={
        root: 'public',
    }

    app.use(express.static('public'));

    app.get('/users', (req, res) =>{
        res.send(users);
    }); 
}

export default router 