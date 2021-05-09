import { cowMotionController, drawField, movementParse, rotationParse } from "./helpers.js"

test("drawField 0", () => {
  var results = drawField({ x: 2, y: 2, facing: "e" })
  expect(results).toEqual([
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", ">", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
})

test("drawField 1", () => {
  var results = drawField({ x: 1, y: 3, facing: "s" })
  expect(results).toEqual([
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "v", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
})

test("drawField 2", () => {
  var results = drawField({ x: 0, y: 0, facing: "w" })
  expect(results).toEqual([
    ["<", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
})

test("drawField 3", () => {
  var results = drawField({ x: 3, y: 1, facing: "n" })
  expect(results).toEqual([
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "^", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
})

test("rotationParse 0", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "n" }, "r")
  expect(results).toEqual({ x: 2, y: 2, facing: "e" })
})

test("rotationParse 1", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "w" }, "r")
  expect(results).toEqual({ x: 2, y: 2, facing: "n" })
})

test("rotationParse 2", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "s" }, "l")
  expect(results).toEqual({ x: 2, y: 2, facing: "e" })
})

test("rotationParse 3", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "n" }, "l")
  expect(results).toEqual({ x: 2, y: 2, facing: "w" })
})

test("movementParse 0", () => {
  var results = movementParse({ x: 2, y: 2, facing: "n" }, "f")
  expect(results).toEqual({ x: 1, y: 2, facing: "n" })
})

test("movementParse 1", () => {
  var results = movementParse({ x: 2, y: 2, facing: "e" }, "f")
  expect(results).toEqual({ x: 2, y: 3, facing: "e" })
})

test("movementParse 2", () => {
  var results = movementParse({ x: 2, y: 2, facing: "s" }, "f")
  expect(results).toEqual({ x: 3, y: 2, facing: "s" })
})

test("movementParse 3", () => {
  var results = movementParse({ x: 2, y: 2, facing: "w" }, "f")
  expect(results).toEqual({ x: 2, y: 1, facing: "w" })
})

test("movementParse 4", () => {
  var results = movementParse({ x: 2, y: 2, facing: "n" }, "b")
  expect(results).toEqual({ x: 3, y: 2, facing: "n" })
})

test("movementParse 5", () => {
  var results = movementParse({ x: 2, y: 2, facing: "e" }, "b")
  expect(results).toEqual({ x: 2, y: 1, facing: "e" })
})

test("movementParse 6", () => {
  var results = movementParse({ x: 2, y: 2, facing: "s" }, "b")
  expect(results).toEqual({ x: 1, y: 2, facing: "s" })
})

test("movementParse 7", () => {
  var results = movementParse({ x: 2, y: 2, facing: "w" }, "b")
  expect(results).toEqual({ x: 2, y: 3, facing: "w" })
})

test("movementParse 8", () => {
  var results = movementParse({ x: 0, y: 0, facing: "w" }, "f")
  expect(results).toEqual({ x: 0, y: 0, facing: "w" })
})

test("movementParse 9", () => {
  var results = movementParse({ x: 4, y: 0, facing: "w" }, "f")
  expect(results).toEqual({ x: 4, y: 0, facing: "w" })
})

test("movementParse 10", () => {
  var results = movementParse({ x: 4, y: 4, facing: "s" }, "f")
  expect(results).toEqual({ x: 4, y: 4, facing: "s" })
})

test("cowMotionController 0", () => {
  var results = cowMotionController({ x: 2, y: 2, facing: "n" }, "f")
  expect(results).toEqual({ x: 1, y: 2, facing: "n" })
})

test("cowMotionController 1", () => {
  var results = cowMotionController({ x: 2, y: 2, facing: "n" }, "b")
  expect(results).toEqual({ x: 3, y: 2, facing: "n" })
})

test("cowMotionController 2", () => {
  var results = cowMotionController({ x: 2, y: 2, facing: "n" }, "r")
  expect(results).toEqual({ x: 2, y: 2, facing: "e" })
})

test("cowMotionController 3", () => {
  var results = cowMotionController({ x: 2, y: 2, facing: "n" }, "l")
  expect(results).toEqual({ x: 2, y: 2, facing: "w" })
})
