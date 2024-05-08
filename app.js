function calculate() {
    let todayYears = document.getElementById("todayYear").value;
    let todayMonths = document.getElementById("todayMonth").value;
    let todayDate = document.getElementById("todayDate").value;

    let userYears = document.getElementById("userYear").value;
    let userMonths = document.getElementById("userMonth").value;
    let userDate = document.getElementById("userDate").value;

    let now1 = new Date(`${todayDate}-${todayMonths}-${todayYears}`);
    let now2 = new Date(`${userDate}-${userMonths}-${userYears}`);

    let now = new Date()

    let userAge = now1.getFullYear() - now2.getFullYear();
    let millisec = now - now2
    let days = millisec / (1000 * 60 * 60 * 24);
    let months = now.getMonth() - now2.getMonth()
    let total = userAge *12 + months
    let min = 24 * 60
    let min2 = min * 365
    let min3 = min2 * 14
    let hours = userAge*24*365
    let weeks = userAge * 52
    let finalweeks = ("Weeks: "+weeks);
    let finalage = ("Age: "+userAge);
    let finalMonth = ('Months: '+ total)
    let finaldays = ("Days: "+Math.floor(days));
    let finalHours = ("Hours: "+hours)
    let finalMin = ("Minutes: "+ min3)
    let finalmillisec = ("Milli Second: "+millisec);
    let totalFinal = finalage+"<br>"+finalMonth+"<br>"+finaldays+"<br>"+finalweeks+"<br>"+finalHours+"<br>"+finalMin+"<br>"+finalmillisec

    let final = document.getElementById("finale").innerHTML = totalFinal

}

