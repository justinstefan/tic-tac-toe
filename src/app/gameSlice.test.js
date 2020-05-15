import { calculateWinner } from './gameSlice'

test("Calculate winner empty", () => {
  const squares = new Array(9).fill(null)

  expect(calculateWinner(squares)).toBeFalsy();
});

test("Calculate winner values - no winner", () => {
  const squares = ['X', '0', null]

  expect(calculateWinner(squares)).toBeFalsy();
});

test("Calculate winner values - X winner", () => {
  const squares = ['X', 'X', 'X']

  expect(calculateWinner(squares)).toEqual('X');
});

test("Calculate winner values - O winner", () => {
  const squares = ['O', 'O', 'O']

  expect(calculateWinner(squares)).toEqual('O');
});