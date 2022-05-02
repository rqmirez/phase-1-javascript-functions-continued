
function saturdayFun(){
    console.log("This Saturday, I want to roller-skate!")
}

function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(action = "go to the office"){
    return(`This Monday, I will ${action}.`)
}

function wrapAdjective(definition='*'){
    return function(name = 'special'){
        return `You are ${definition}${name}${definition}!`
    }
}
