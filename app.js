
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
    console.log("Minutes ===>"+ min3)

    console.log('Months ==>'+ total)
    console.log("Age ==>",userAge);
    console.log("Milli Second ==>",millisec);
    console.log("Days ==>",Math.floor(days));


}
