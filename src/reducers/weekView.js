const week = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}