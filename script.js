let time = prompt("Enter a TIME from 0 to 24");
if (time >= 5 && time <= 11.59) {
    let greeting = `Good morning! It's ${time} o'clock.`;
        alert(greeting);
}else if(time >=12.00 && time <= 16.59){
    let greeting = `Good Afternoon! It's ${time} o'clock.`;
    alert(greeting);
}else if(time >=17.00 && time < 24.59){
    let greeting = `Good Nignt! It's ${time} o'clock.`;
    alert(greeting);
}
else if(time >= 0 && time <= 4.59){
    let greeting = `Mid Night! It's ${time} o'clock.`;
    alert(greeting);
}
 else if(isNaN(time)){
    let greeting = `Invalid input. Please enter a TIME in numeric format.`;
    alert(greeting);
}
else{
    let greeting = `Invalid input. Please enter a TIME from 0 to 24.`;
    alert(greeting);
}
