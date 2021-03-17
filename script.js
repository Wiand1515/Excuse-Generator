function sentence () {
    
    //Palabras en Array
    let who = ["The Dog", "My Grandma", "His Turtle", "My Bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the Keys", "the car"];
    let when = ["before class", "right on time", "when i finished", "durning my lunch", "while i was praying"];
    
    //Random Generator
    let random1 = who[Math.floor(Math.random() * who.length)];
    let random2 = action[Math.floor(Math.random() * action.length)];
    let random3 = what[Math.floor(Math.random() * what.length)];
    let random4 = when[Math.floor(Math.random() * when.length)];
    
    return (random1 + " " + random2 + " " + random3 + " " + random4);
    
}
document.getElementById("excuse").innerHTML = sentence();