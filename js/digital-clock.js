function clock() {
    var hours = document.getElementById("hrs");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("am");
    var hour = new Date()
    var a = hour.getHours() > 12 && hour.getHours() < 24 ? hour.getHours() - 12 : hour.getHours();
    var b = hour.getMinutes() < 10 ? "0" + hour.getMinutes() : hour.getMinutes();
    var c = hour.getSeconds() < 10 ? "0" + hour.getSeconds() : hour.getSeconds();
    var d = hour.getHours() > 12 && hour.getHours() < 24 ? "PM" : "AM";
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    am.innerHTML = d;

}
setInterval(clock, 1000)

function settime() {
    var i = document.getElementById('options1').value;
    var x = new Date().getHours();
    var g = new Date().getMinutes();
    var h = new Date().getSeconds();

    if (i == x) {
        document.getElementById('right-down').style.backgroundImage = "url(images/wake-up-pic.jpg)";
        document.getElementById('right-up').textContent = "Have some healthy break fast";
        document.getElementById('display').textContent = "GOOD MORNING  "+" " + x + ":" + g + ":" + h;
    }
    var j = document.getElementById('options2').value;
    var y = new Date().getHours();
    if (j == y) {
        document.getElementById('right-down').style.backgroundImage = "url(images/lunch.jpg)";
        document.getElementById('right-up').textContent = "Lets taste Some Delicious food";
        document.getElementById('display').textContent = "GOOD AFTERNOON "+" " + x + ":" + g + ":" + h;
    }
    var k = document.getElementById('options3').value;
    var z = new Date().getHours();
    if (k == z) {
        document.getElementById('right-down').style.backgroundImage = "url(images/tea.png)";
        document.getElementById('right-up').textContent = "Take a sip of tea";
        document.getElementById('display').textContent = "GOOD EVENING "+" " + x + ":" + g + ":" + h;
    }
    var l = document.getElementById('options4').value;
    var r = new Date().getHours();
    if (l == r)
    {
        document.getElementById('right-down').style.backgroundImage = "url(images/night.png)";
        document.getElementById('right-up').textContent = "Dream to become higher";
        document.getElementById('display').textContent = "GOOD NIGHT "+" " + x + ":" + g + ":" + h;
        }
}
