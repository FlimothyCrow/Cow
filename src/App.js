import "./App.css"
import { drawField as drawField, movementParse, rotationParse } from "./scripts/helpers"
import React from "react"

class Cow extends React.Component {
  constructor(props) {
    super(props)
    let coordinates = { x: 2, y: 2, facing: "n" }
    this.state = {
      text: "hello world!!!",
      coordinates: coordinates,
    }
  }

  render() {
    let field = drawField(this.state.coordinates)
    return (
      <>
        {console.log("field " + field)}
        {console.log("coords " + this.state.coordinates.facing)}
        <div>Field:</div>
        <table>
          {field.map((row) => (
            <tr>
              {row.map((square) => (
                <td className="field-squares">{square}</td>
              ))}
            </tr>
          ))}
        </table>
        <button onClick={() => this.setState({ coordinates: rotationParse(this.state.coordinates, "l") })}>
          rotate left
        </button>
        <button onClick={() => this.setState({ coordinates: rotationParse(this.state.coordinates, "r") })}>
          rotate right
        </button>
        <button onClick={() => this.setState({ coordinates: movementParse(this.state.coordinates, "f") })}>
          move forward
        </button>
        <button onClick={() => this.setState({ coordinates: movementParse(this.state.coordinates, "b") })}>
          move backwards
        </button>
      </>
    )
  }
}

export default Cow

// to do:
// icons / graphics ?
// final position or "trace the movement"?

// directions input? maybe some LRBF buttons, queue them up and then click "go"
// error about moving off field
// input readonly = true
// controller(moveparse, rotateparse)
// "next" button calls this.state.instructions[0] feeds it through controller
// this.setState.coordinates = controller(instructions[0])
