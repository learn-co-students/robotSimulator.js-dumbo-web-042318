const directions = ["north", "east", "south",  "west"];

class Robot {
	constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    if (directions.includes(direction)) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(corBear) {
    this.setCoordinates(corBear["x"], corBear["y"]);
    this.setBearing(corBear["direction"]);
  }

  turnRight() {
    let current = directions.indexOf(this.bearing);
    if (current === 3) {
      this.bearing = directions[0];
    } else {
      this.bearing = directions[current + 1];
    };
  }

  turnLeft() {
    let current = directions.indexOf(this.bearing);
    if (current === 0) {
      this.bearing = directions[3];
    } else {
      this.bearing = directions[current - 1];
    };
  }

  advance() {
    let currentX = this.coordinates[0];
    let currentY = this.coordinates[1];
    switch (this.bearing) {
      case 'north':
        currentY += 1
        this.setCoordinates(currentX, currentY);
        break;
      case 'east':
        currentX += 1
        this.setCoordinates(currentX, currentY);
        break;
      case 'west':
        currentX -= 1
        this.setCoordinates(currentX, currentY);
        break;
      default:
        currentY -= 1
        this.setCoordinates(currentX, currentY);
    }
  }

  translateInstructions(instructions) {
    let array = instructions.split('');
    array.forEach(function(command){
      if (command === 'L') {
        this.turnLeft();
      } else if (command === 'R') {
        this.turnRight();
      } else if (command === 'A') {
        this.advance();
      } else {
        throw "Invalid Command"
      }
    }.bind(this))
  }
}
