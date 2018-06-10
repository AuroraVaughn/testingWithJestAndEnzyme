import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'reducers'

// this allows abstraction of store set up
// to one location. Used in all connected component
// tests.

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={
      createStore(reducer, initialState)}>
      {children}
    </Provider>
  )
}
