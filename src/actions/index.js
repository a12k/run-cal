let nextDatumId = 0
export const addData = (number) => {
  return {
    type: 'ADD_DATA',
    id: nextDatumId++,
    number
  }
}
