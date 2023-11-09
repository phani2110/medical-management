(function () {
    emailjs.init("pQv84s9sZmlHpp_qQ");
})();

function setReminder() {
    var reminderText = document.getElementById("reminderText").value;   
     var email=document.getElementById("email").value;
    var reminderTime = new Date(document.getElementById("reminderTime").value).getTime();
    var currentTime = new Date().getTime();

    if (reminderText.trim() === "" || isNaN(reminderTime) || reminderTime <= currentTime) {
        alert("Please enter a valid reminder time in the future.");
        return;
    }

    // Calculate the time difference between the current time and the reminder time
    var timeDiff = reminderTime - currentTime;

    // Set a timeout to display a browser notification and send an email when the reminder time is reached
    setTimeout(function () {
        // Display browser notification
        if (Notification.permission === "granted") {
            var notification = new Notification("Reminder", {
                body: reminderText,
            });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    var notification = new Notification("Reminder", {
                        body: reminderText,
                    });
                }
            });
        }

        // Send email using EmailJS
        sendEmailReminder(reminderText);

    }, timeDiff);
}
  
setInterval(clock, 1000)
function sendEmailReminder(reminderText) {
    emailjs.send("service_8mmx2b6", "template_y5hgf5w", {
        to_email:email.value,
        message: reminderText,
    })
    .then(function (response) {
        promt("Email sent..........")
        console.log("Email sent successfully!", response.status, response.text);
    }, function (error) {
        console.log("Error sending email:", error);
    });
}
