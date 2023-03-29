export const getIsMatchedNumber = (number, numberOfSelectedCell) => {
  if (Array.isArray(number)) {
    return false;
  }

  if (number === numberOfSelectedCell && number) {
    return true;
  } else {
    return false;
  }
};

export const getIdsRowsColumnsSquares = () => {
  const RowColumnSqrObject = {
    rows: [],
    columns: [],
    squares: [],
  };

  let counterColumn = -1;
  let counterSquare = 0;
  let row = null;
  let column = null;
  let square = null;

  for (let i = 0; i < 81; i++) {
    if (i % 9 == 0) {
      counterColumn++;
      row = [];
      column = [];
      square = [];

      RowColumnSqrObject.rows.push(row);
      RowColumnSqrObject.columns.push(column);
      RowColumnSqrObject.squares.push(square);
    }

    if (i % 27 == 0) {
      counterSquare = 0;
    } else if (i % 9 == 0) {
      counterSquare -= 18;
    } else if (i % 3 == 0) {
      counterSquare += 6;
    }
    row.push(String(i));
    column.push(String((i % 9) * 9 + counterColumn));
    square.push(String(i + counterSquare));
  }

  return RowColumnSqrObject;
};

export const getListOfIdsAssociated = (selectedCellId) => {
  const { rows, columns, squares } = getIdsRowsColumnsSquares();

  const rowList = rows.find((row) => row.includes(selectedCellId));
  const colList = columns.find((col) => col.includes(selectedCellId));
  const sqrList = squares.find((sqr) => sqr.includes(selectedCellId));

  return rowList.concat(colList, sqrList);
};
