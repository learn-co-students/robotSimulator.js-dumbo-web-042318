class Robot {
	//your solution here
	constructor(){
		this.coordinates = [0, 0];
		this.bearing = "north";
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(bearing) {
		switch (bearing) {
			case 'north':
			case 'east':
			case 'south':
			case 'west':
				this.bearing = bearing;
				break;
			default:
				throw Error("Invalid Robot Bearing");
		}
	}

	place(obj) {
		this.setCoordinates(obj.x, obj.y);
		this.setBearing(obj.direction);
	}

	turnRight() {
		switch (this.bearing) {
			case 'north':
				this.setBearing("east");
				break;
			case 'east':
				this.setBearing("south");
				break;
			case 'south':
				this.setBearing("west");
				break;
			case 'west':
				this.setBearing("north");
				break;
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case 'north':
				this.setBearing("west");
				break;
			case 'east':
				this.setBearing("north");
				break;
			case 'south':
				this.setBearing("east");
				break;
			case 'west':
				this.setBearing("south");
				break;
		}
	}

	advance() {
		switch (this.bearing) {
			case 'north':
				this.coordinates[1] += 1;
				break;
			case 'east':
				this.coordinates[0] += 1;
				break;
			case 'south':
				this.coordinates[1] -= 1;
				break;
			case 'west':
				this.coordinates[0] -= 1;
				break;
		} 
	}

	translateInstructions(input) {
		for (let i of input) {
			switch (i) {
				case 'L':
					this.turnLeft();
					break;
				case 'R':
					this.turnRight();
					break;
				case 'A':
					this.advance();
					break;
			}
		}
	}
}
