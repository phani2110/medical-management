var nm = require('nodemailer')
var transport = nm.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user: "hemanthreddykoti@gmail.com",
        pass:'jljxqzmrzriarcad'
    }
})
var options = {
    from: 'hemanthreddykoti@gmail.com',
    to: 'hemanthreddykoti123@gmail.com',
    subject: 'Node JS mail Tester',
    text: "hi this is hemanthreddy just i am testing the nodemailer module",
    html: `<h1>This is testing for image purpuse:</h1>
    <img src="cid:car" width="200px">
    <button>click me</button>`,
    attachments: [{
        filename:'car.jpeg',
        path:"https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600",
        cid:'car'
    }]
}


transport.sendMail(
    options, function (error, success) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("done");
        }
    }
)