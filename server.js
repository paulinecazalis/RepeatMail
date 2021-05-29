const express = require('express');
const app = express();
const open = require('open');

const nodemailer = require('nodemailer');

const PORT  = process.env.PORT || 5000;

open('http://localhost:' + PORT);

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contactform.html');
})

app.post('/', (req, res)=>{
    const transporter = nodemailer.createTransport({
        service : 'gmail', //Specify the name of the host, here by default gmail
        auth: {
            user : '', //Specify the mail of the user
            pass : '' //Specify the password of the user (gmail uses an automatically generated password, see nodemailer doc)
        }
    })

    const mailOptions = {
        from : req.body.email2,
        to : req.body.email,
        subject : "${req.body.subject}",
        text : req.body.message
    }

    if(req.body.check1){
        transporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }else{
                console.log('Email send: ' + info.response);
                res.send('success');
            }
        })
        setInterval(() => {
            transporter.sendMail(mailOptions, (error, info)=>{
                if(error){
                    console.log(error);
                    res.send('error');
                }else{
                    console.log('Email send: ' + info.response);
                    res.send('success');
                }
            })
        }, 10000);
    }else if(req.body.check2){
        transporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }else{
                console.log('Email send: ' + info.response);
                res.send('success');
            }
        })
        setInterval(() => {
            transporter.sendMail(mailOptions, (error, info)=>{
                if(error){
                    console.log(error);
                    res.send('error');
                }else{
                    console.log('Email send: ' + info.response);
                    res.send('success');
                }
            })
        }, 20000);
    }else if(req.body.check3){
        transporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }else{
                console.log('Email send: ' + info.response);
                res.send('success');
            }
        })
        setInterval(() => {
            transporter.sendMail(mailOptions, (error, info)=>{
                if(error){
                    console.log(error);
                    res.send('error');
                }else{
                    console.log('Email send: ' + info.response);
                    res.send('success');
                }
            })
        }, 30000);
    }
})



app.listen(PORT, ()=>{
    console.log('server running on port', PORT);
});