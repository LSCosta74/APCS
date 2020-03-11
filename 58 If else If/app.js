// let time = 12
// let greeting = ''

// if(time > 12) {
//     greeting ='Good Morning'
// }else{
//     greeting = 'Good Afternoon'
// }

// if (time > 16){
//     greeting = 'Good Evening'
// }
//sequential if statements don't work for this scenario

// let time = 12
// let greeting = ''

// if(time > 12) {
//     greeting ='Good Morning'
// }else{
//     if (time > 16){
//         greeting = 'Good Evening'
//     }else{
//         greeting = 'Good Afternoon'
//     }
// }
// nested if statements can get very complicated very quickly

let time = 12
let greeting = ''

if(time > 12) {
    greeting ='Good Morning'
}else if (time > 16){
    greeting = 'Good Afternoon'
}else if(time < 20){
    greeting = 'Good Evening'
}else{
    greeting = 'Good Night'
}

