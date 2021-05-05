import "./App.css"
// import drawField from "./scripts/helpers"
import { drawField as drawField } from "./scripts/helpers"
import React from "react"

class Cow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "hello world!!!",
      coordinates: { x: 2, y: 2, facing: "n" },
      // field: drawField(this.state.coordinates),
      field: drawField({ x: 2, y: 2, facing: "n" }),
    }
  }

  render() {
    return (
      <>
        {console.log("field " + this.state.field)}
        {console.log("coords " + this.state.coordinates.facing)}
        <div>Field:</div>
        <table>
          {this.state.field.map((row) => (
            <tr>
              {row.map((square) => (
                <td className="field-squares">{square}</td>
              ))}
            </tr>
          ))}
        </table>
      </>
    )
  }
}

export default Cow

// to do:
// icons / graphics ?
// final position or "trace the movement"?

// directions input? maybe some LRBF buttons, queue them up and then click "go"
// controller() needs to call drawField() but it has to update state coordinates
