// I'm probably going to switch this project do python, because JS Date objects are only returning
// dates in local timezones. This causes issues when the inputted date is a Thursday The 20th
// ie 4/20/2023 - it returns 4/19/2023 19:00:00 GMT on my end. Tried to consult with others, 
// but this appears to be a known limitation of JS Date that I wasn't familiar with.


document.querySelector('#inputDate').addEventListener('input', inputDate)
document.querySelector('#endDate').addEventListener('input',endingDate)
document.querySelector('#currentDate').addEventListener('change', currentDate)
document.querySelector('#includeLastDay').addEventListener('change', includeLastDay)
document.querySelector('#submission').addEventListener('click', thursdayThe20th)

function inputDate(){
    let firstDate = new Temporal.PlainDate(document.querySelector('#inputDate').value)
    console.log(firstDate)
    return firstDate
}
function endingDate(){
    let secondDate = new Temporal.PlainDate(document.querySelector('#endDate').value)
    console.log(secondDate)
    return secondDate
}
function currentDate(){
    // this will be easier with temporal
    console.log(Temporal.Now.plainDateISO())
}

function includeLastDay(){
    // so last needs to be a query selector
    let last = document.querySelector('#includeLastDay')
    let checked = null,
        ending = endingDate();
    if (last.checked == true){
        console.log(`last day ${ending} included`)
        checked = true
    }
    else{
        console.log("last day not included")
        checked = false
    }
    return checked
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
        secondDate.setDate(secondDate.getDate()-1)
        console.log(`Last day not included. Last day is now ${secondDate}`)
    }
    if (firstDate < secondDate){
        for (let day = firstDate; day <= secondDate; day.setDate(day.getDate()+1)){
        if (day.getDate() === 20 && day.getDay() === 4){
            thursday20th++
            console.log(day)
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
