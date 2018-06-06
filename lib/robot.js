


class Robot {

	constructor(coordinates=[0,0], bearing='north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }


	setCoordinates(x,y) {
		this.coordinates[0] = x;
		this.coordinates[1] = y;
	}


	setBearing(str){
		const directions = ["north", "south", "east", "west"];
			if (directions.indexOf(str) >= 0) {
				this.bearing = str;
			} else {
				throw 'Invalid Robot Bearing';
			}
		}


	place(obj){
		this.coordinates[0] = obj.x;
		this.coordinates[1] = obj.y;
		this.bearing = obj.direction;
	}

	turnRight(){
		if(this.bearing === "north"){
			this.bearing = "east";
		} else if (this.bearing === "east") {
			this.bearing = "south";
		} else if (this.bearing === "south") {
			this.bearing = "west";
		} else {
			this.bearing = "north";
		}
}
		// switch(this.bearing) {
    // case "north":
    //     this.bearing = "east";
    //     break;
    // case "east":
    //     this.bearing = "south";
    //     break;
		// case "south":
    //     this.bearing = "west";
    //     break;
		// case "west":
    //     this.bearing = "north";
    //     break;
		// 	}

		turnLeft () {
			switch(this.bearing) {
				case 'north':
				this.bearing = 'west';
				break;
				case 'east':
				this.bearing = 'north';
				break;
				case 'south':
				this.bearing = 'east';
				break;
				case 'west':
				this.bearing = 'south';
				break;
			}
		}

		advance () {
			if(this.bearing === "north"){
				this.coordinates[1] = (this.coordinates[1] + 1);
			} else if (this.bearing === "east") {
				this.coordinates[0] = (this.coordinates[0] + 1);
			} else if (this.bearing === "south") {
				this.coordinates[1] = (this.coordinates[1] - 1);
			} else {
				this.coordinates[0] = (this.coordinates[0] - 1);
			}
		}

		translateInstructions() {

		}



	}
