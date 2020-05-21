let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

for(let temp of sportsTwo){
    console.log(temp); 
}

sportsTwo.push("Baseball");
sportsTwo.push("Football");

for (let tempSport of sportsTwo) {
    console.log(tempSport);
}