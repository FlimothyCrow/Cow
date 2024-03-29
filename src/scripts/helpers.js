export function rotationParse(position, movement) {
  let positionToReturn = Object.assign({}, position)
  let compassArray = ["n", "e", "s", "w"]
  if (movement === "r") {
    if (!compassArray[compassArray.indexOf(position.facing) + 1]) {
      positionToReturn.facing = "n"
    } else {
      positionToReturn.facing = compassArray[compassArray.indexOf(position.facing) + 1]
    }
  } else {
    if (movement === "l") {
      if (!compassArray[compassArray.indexOf(position.facing) - 1]) {
        positionToReturn.facing = "w"
      } else {
        positionToReturn.facing = compassArray[compassArray.indexOf(position.facing) - 1]
      }
    }
  }
  return positionToReturn
}

export function movementParse(currentPosition, movement) {
  let positionToReturn = Object.assign({}, currentPosition)
  let current = Object.assign({}, currentPosition)
  if (movement === "f") {
    if (currentPosition.facing === "n") {
      positionToReturn.x -= 1
    } else if (currentPosition.facing === "e") {
      positionToReturn.y += 1
    } else if (currentPosition.facing === "s") {
      positionToReturn.x += 1
    } else if (currentPosition.facing === "w") {
      positionToReturn.y -= 1
    }
  } else if (movement === "b") {
    if (currentPosition.facing === "n") {
      positionToReturn.x += 1
    } else if (currentPosition.facing === "e") {
      positionToReturn.y -= 1
    } else if (currentPosition.facing === "s") {
      positionToReturn.x -= 1
    } else if (currentPosition.facing === "w") {
      positionToReturn.y += 1
    }
  }

  if (positionToReturn.y < 0 || positionToReturn.x < 0) {
    return current
  } else if (positionToReturn.y > 4 || positionToReturn.x > 4) {
    return current
  } else {
    return positionToReturn
  }
}

export function cowMotionController(coordinates, instruction) {
  if (instruction === "f" || instruction === "b") {
    return movementParse(coordinates, instruction)
  } else if (instruction === "r" || instruction === "l") {
    return rotationParse(coordinates, instruction)
  }
}

export function drawField(currentPosition) {
  let objOfDirections = { n: "^", e: ">", s: "v", w: "<" }
  let field = Array(5)
    .fill("0")
    .map((x) => Array(5).fill("0"))
  field[currentPosition.x][currentPosition.y] = objOfDirections[currentPosition.facing]
  return field
}
