import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

describe('Comments Reducer', () => {

  it('handles actions of type SAVE_COMMENT', () => {
    const text = 'New comment'
    const action = {
      type: SAVE_COMMENT,
      payload: text
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual([text])
  })
  it('handles an action with an unknown type', () => {
    const orginalState = []
    expect(commentsReducer(orginalState, {})).toEqual(orginalState)
  })
})
