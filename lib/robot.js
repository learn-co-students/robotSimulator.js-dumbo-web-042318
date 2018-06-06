class Robot {
	//your solution here

  constructor(coordinates = [0,0], bearing = "north") {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    this.coordinates = [x,y];
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(direction)) {
      this.bearing = direction
    }else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y);
    this.setBearing(obj.direction);
  }

  turnRight() {
    this.turn('R')
  }

  turnLeft() {
    this.turn('L')
  }

  turn(left_or_right) {
    const directions = ["north", "east", "south", "west"];
    let currentB = directions.indexOf(this.bearing);
    let numdir = left_or_right === "R" ? 1 : 3;
    this.bearing = directions[(currentB + numdir) % 4];
  }

  advance() {
    switch(this.bearing){
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }

  handleInstruction(char) {
    if (char === 'A') {
      this.advance();
    } else {
      this.turn(char);
    }
  }
  translateInstructions(str) {
    for(const char of str) {
      this.handleInstruction(char)
    }
  }



}
