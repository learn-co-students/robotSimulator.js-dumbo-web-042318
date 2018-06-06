class Robot {
	constructor(coordinates = [0, 0], bearing = "north") {
		this.coordinates = coordinates
		this.bearing = bearing
	};

	setCoordinates(x, y) {
		this.coordinates = [x, y]
	};

	setBearing(direction) {
		const directions = ["north", "south", "east", "west"];
		if (directions.includes(direction)) {
			this.bearing = direction;
		} else {
			throw "Invalid Robot Bearing";
		}
	};

	place(startingPlace) {
		this.setCoordinates(startingPlace.x, startingPlace.y);
		this.setBearing(startingPlace.direction)
	}

	turnRight() {
		if (this.bearing === "north") {
			this.setBearing("east");
		} else if (this.bearing === "east") {
			this.setBearing("south");
		} else if (this.bearing === "south") {
			this.setBearing("west");
		} else if (this.bearing === "west") {
			this.setBearing("north");
		}
	}

	turnLeft() {
		if (this.bearing === "north") {
			this.setBearing("west");
		} else if (this.bearing === "east") {
			this.setBearing("north");
		} else if (this.bearing === "south") {
			this.setBearing("east");
		} else if (this.bearing === "west") {
			this.setBearing("south");
		}
	}

	advance() {
		if (this.bearing === "north") {
			this.coordinates[1] += 1;
		} else if (this.bearing === "east") {
			this.coordinates[0] += 1;
		} else if (this.bearing === "south") {
			this.coordinates[1] -= 1;
		} else if (this.bearing === "west") {
			this.coordinates[0] -= 1
		}
	}

	translateInstructions(instructions) {
		const instructionArray = instructions.split("")

		for (const instruction of instructionArray) {
			if (instruction === "L"){
				this.turnLeft()
			} else if (instruction === "R"){
				this.turnRight()
			} else if (instruction === "A"){
				this.advance()
			};
		}

	}


}
