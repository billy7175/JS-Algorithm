function takeShower(){
    console.log('takeShower')
    return "Showering!"
}

function eatBreakfast(){
    console.log('before eatBreakfast')
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    console.log('cookFood')
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    console.log('wakeUp')
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()