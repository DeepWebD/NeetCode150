let arrival = [900, 905, 915, 920, 930, 940, 950, 1000, 1015];
let departure = [910, 930, 925, 1030, 1005, 1200, 1120, 1020, 1130];
function findMinPlatform(arriavalArr, departureArr) {
  let trains = [];

  for (let i = 0; i < arriavalArr.length; i++) {
    if (trains.find((train) => train < arriavalArr[i])) {
       trains.push(departureArr[i]);
    
    } else {
     
    }
     trains.map((train) => {
        if (train < arriavalArr[i]) {
          return arriavalArr[i];
        }
      });
  }

  return trains;
}

console.log(findMinPlatform(arrival,departure))