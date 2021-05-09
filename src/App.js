import "./App.css"
import { drawField, cowMotionController } from "./scripts/helpers"
import React from "react"

class Cow extends React.Component {
  constructor(props) {
    super(props)
    let coordinates = { x: 2, y: 2, facing: "n" }
    this.state = {
      errorMessage: "",
      coordinates: coordinates,
      instructions: [],
    }
  }

  nextMove() {
    let newCoords = cowMotionController(this.state.coordinates, this.state.instructions[0])
    if (JSON.stringify(newCoords) === JSON.stringify(this.state.coordinates)) {
      this.setState({ errorMessage: " stay on the field" })
    } else if (!newCoords) {
      this.setState({ errorMessage: " pick first" })
    } else {
      this.setState({ coordinates: newCoords })
      this.state.instructions.splice(0, 1)
    }
  }

  processMove(instruction) {
    this.setState({ instructions: this.state.instructions.concat(instruction), errorMessage: "" })
  }

  render() {
    let field = drawField(this.state.coordinates)
    return (
      <>
        <div>Field:</div>
        <table>
          <tbody>
            {field.map((row, idx) => (
              <tr key={idx + row}>
                {row.map((square, idx) => (
                  <td key={idx + square} className="field-squares">
                    {square}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button className="movement-buttons" onClick={() => this.processMove("l")}>
          rotate left
        </button>
        <button className="movement-buttons" onClick={() => this.processMove("r")}>
          rotate right
        </button>
        <button className="movement-buttons" onClick={() => this.processMove("f")}>
          move forward
        </button>
        <button className="movement-buttons" onClick={() => this.processMove("b")}>
          move backwards
        </button>
        <p>
          Directions:
          {this.state.errorMessage || (
            <input
              className="instructions-field"
              readOnly
              value={this.state.instructions + this.state.errorMessage}
            ></input>
          )}
        </p>
        <button
          onClick={() => {
            this.nextMove()
          }}
        >
          next move
        </button>
      </>
    )
  }
}

export default Cow
