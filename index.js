// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (adjective='*'){
   const innerFunction = function(value){
       return `You are ${adjective}${value}${adjective}!`
   }
return innerFunction
}

