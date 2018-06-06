directions = ['north', 'east', 'south', 'west']

class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    if (directions.includes(bearing)) {
      this.bearing = bearing;
    }else{
      throw "Invalid Robot Bearing";
    }
  }

  place(obj) {
    this.setCoordinates(obj["x"], obj["y"]);
    this.setBearing(obj["direction"]);
  }

  turnRight() {
    let i = directions.indexOf(this.bearing);
    if (i === 3) {
      this.setBearing(directions[0]);
    }else{
      this.setBearing(directions[i + 1]);
    }
  }

  turnLeft() {
    let i = directions.indexOf(this.bearing);
    if (i === 0) {
      this.setBearing(directions[3]);
    }else{
      this.setBearing(directions[i - 1]);
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break;
      case 'south':
        this.coordinates[1]--
        break;
      case 'east':
        this.coordinates[0]++
        break;
      case 'west':
        this.coordinates[0]--
        break;
    }
  }

  translateInstructions(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
      }
    }
  }
}
