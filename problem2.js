function isElevatorSafe(weights) {
if(Array.isArray(weights) === false){
    return 'Invalid'
}
let total =0
for(let weight of weights){
    total += weight;
}

if(total <= 400){
    return true;
}
else{
    return false;
}

}

console.log(isElevatorSafe([400]))
console.log(isElevatorSafe([90,100,95,120])); 
console.log(isElevatorSafe([60,75,50])); 
console.log(isElevatorSafe("60,75,50")); 