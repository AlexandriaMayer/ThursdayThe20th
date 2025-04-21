
document.querySelector('#inputDate').addEventListener('input', inputDate)
document.querySelector('#endDate').addEventListener('input',endingDate)
// document.querySelector('#currentDate').addEventListener('change', currentDate)
document.querySelector('#includeLastDay').addEventListener('change', includeLastDay)
document.querySelector('#submission').addEventListener('click', thursdayThe20th)

function inputDate(){
    let firstDate = new Date(document.querySelector('#inputDate').value)
    console.log(firstDate)
    // I need to adjust the date for UTC - April 1st is returning March 31st at 7pm CST
    return firstDate
}
function endingDate(){
    let secondDate = new Date(document.querySelector('#endDate').value)
    console.log(secondDate)
    return secondDate
}
/**function currentDate(){
    // I think for version 1.0, I don't need to get current date - this would just be a nice shortcut
    if (this.checked){
        let today = new Date();
        console.log(`Today is ${today}`)
    // Are you kidding me? It was that easy?   
    }
    else{
        console.log("Using user specified date")
    }
    return today
}
    I decided not to include this function today
**/
function includeLastDay(){
    let last = null
    if (this.checked){
        console.log("last day included")
        last = true
    }
    else{
        console.log("last day not included")
        last = false
    }
    return last
    
}


function thursdayThe20th(){
    // we have to use recursion to loop through the dates
    // we already have our starting and ending dates
    // so I think I should handle the date reversal like this:
    // throw an error, say the ending date has to be after the starting date
    let firstDate = inputDate();
    let secondDate = endingDate(); 
    let lastDay = includeLastDay();
    let thursday = 0,
        the20th = 0,
        thursday20th = 0;
    // covering the last day condition here.
    if (lastDay == false){
        secondDate.setDate(-1)
    }
    if (firstDate < secondDate){
        for (let day = firstDate; day <= secondDate; day.setDate(day.getDate()+1)){
        if (day.getDate() === 20 && day.getDay() === 4){
            thursday20th++
        }
        if (day.getDate() === 20){
            the20th++
        }
        if (day.getDay() === 4){
            thursday++
        }
        let newDate = firstDate.setDate(firstDate.getDate() + 1)
        // console.log(`newDate ${newDate}, firstDate ${firstDate}`)
        firstDate = new Date(newDate);
        }
        document.querySelector('#datesReversed').innerText= ""
        document.querySelector('#thursdays').innerText = `${thursday} Thursdays.`;
        document.querySelector('#the20ths').innerText = `${the20th} The 20ths.`;
        document.querySelector('#thursdayThe20ths').innerText = `${thursday20th} Thursday The 20ths.`;
        console.log(`The 20ths: ${the20th}, Thursdays: ${thursday}, Thursday the 20ths: ${thursday20th}`)
    }
    else{
        document.querySelector('#datesReversed').innerText = "Starting date should be before ending date."
        document.querySelector('#thursdays').innerText = "";
        document.querySelector('#the20ths').innerText = "";
        document.querySelector('#thursdayThe20ths').innerText = "";
    }
    // now I need to make the function fill in the H1s on the page
    // if date[i][dayOfWeek] = "Thursday" && date[i][day] = 20, console.log("Thursday the 20th!")
    // if date[i][dayOfWeek] = "Thursday", console.log("Thursday")
    // if date[i][day] = 20, console.log("the 20th!")
}