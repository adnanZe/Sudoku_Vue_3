import { makepuzzle as generateSudokuNumbers } from "sudoku";
import { getListOfIdsAssociated, getIsMatchedNumber } from "./sudokuService";

const polishArray = (array) => {
  return array.map((item) => (item === null ? "" : `${item + 1}`));
};

export const generateSudokuStates = () => {
  const rawSudokuNumbers = generateSudokuNumbers();
  const sudokuNumbers = polishArray(rawSudokuNumbers);

  const defaultSelectedIndex = 0;
  const defaultSelectedValue = sudokuNumbers[defaultSelectedIndex];

  return sudokuNumbers.map((number, index) => ({
    value: number,
    id: index.toString(),
    isSelected: index === defaultSelectedIndex,
    isReadOnly: !!number,
    isAssociated: getListOfIdsAssociated(
      defaultSelectedIndex.toString()
    ).includes(index.toString()),
    isMatchValue: getIsMatchedNumber(number, defaultSelectedValue),
    isWrongValue: false,
    associatedIds: getListOfIdsAssociated(index.toString()),
  }));
};
