class Robot {
	constructor(coordinates = [0,0], bearing = "north") {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"];

    if (directions.includes(bearing)) {
      this.bearing = bearing;

    } else {
      throw "Invalid Robot Bearing" ;
    };
  }

  place(obj) {
    this.coordinates = [obj["x"], obj["y"]]
    // debugger;
    this.bearing = obj["direction"]
    // this.setCoordinates(hash['x'],hash['y']);
    // this.setBearing(hash['bearing']);
  }

  turnRight() {
    const directions = ["north", "east", "south", "west"];

    let index = directions.indexOf(this.bearing);
    // const result =
    if (index === 3) {
      this.bearing = "north"
    } else {
      this.bearing = directions[index + 1]
    }

  }

  turnLeft() {
    const directions = ["north", "east", "south", "west"];

    let index = directions.indexOf(this.bearing);
    // const result =
    if (index === 0) {
      this.bearing = "west"
    } else {
      this.bearing = directions[index - 1]
    }
  }

  advance() {

    switch (this.bearing){
    case("north"):
    this.coordinates = [this.coordinates[0], (this.coordinates[1] + 1)];
    break;

    case("east"):
    this.coordinates = [(this.coordinates[0] + 1), this.coordinates[1]];
    break;

    case("south"):
    this.coordinates = [this.coordinates[0], (this.coordinates[1] - 1)];
    break;

    case("west"):
    this.coordinates = [(this.coordinates[0] - 1), this.coordinates[1]];
    break;
    }
  }

  translateInstructions(str) {

    for (let i = 0; i < str.length; i++) {

      switch (str.charAt(i)) {

        case("R"):
        this.turnRight();
        break;

        case("L"):
        this.turnLeft();
        break;

        case("A"):
        this.advance();
        break;
      }

    }
  }


}
