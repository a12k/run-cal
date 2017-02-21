import React from 'react'
import { connect } from 'react-redux'
import { addData } from '../actions'

let AddData = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addData(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Calculate Schedule
        </button>
      </form>
    </div>
  )
}
AddData = connect()(AddData)

export default AddData