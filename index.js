function produceDrivingRange(blockRange){
  return function(start, end){
    let distance = end.slice(0,-2) - start.slice(0,-2);
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`;
    } else {
        return `${distance - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {

  return class {
      let driverId = 0;
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
