class Robot {
	//your solution here
  constructor(coordinates=[0,0], bearing='north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing(bearing) {
    let bearings = ['north', 'east', 'south', 'west']
    if (bearings.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight() {
    let bearings = ['north', 'east', 'south', 'west']
    this.bearing = bearings[((bearings.indexOf(this.bearing) + 1) % 4)]
  }

  turnLeft() {
    let bearings = ['north', 'east', 'south', 'west']
    this.bearing = bearings[((bearings.indexOf(this.bearing) + 3) % 4)]
  }

  advance() {
    let bearing = this.bearing
    switch (bearing) {
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

  translateInstructions(instructions) {
    let arrayOfInstructions = instructions.split('')
    console.log(arrayOfInstructions);
    for(const element of arrayOfInstructions){
      switch (element) {
        case "L":
          this.turnLeft()
          break;
        case "R":
          this.turnRight()
          break;
        default:
          this.advance()
          break;
      }
    }
  }
}
