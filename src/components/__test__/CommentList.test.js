import React from 'react';
import CommentList from 'components/CommentList';
import { mount } from 'enzyme';
import Root from 'Root'
describe('Comment List', () => {
  let wrapped, initialState
  const comment1 = 'Comment 1',
    comment2 = 'Comment 2'

  beforeEach(() => {
    initialState = {
      comments: [comment1, comment2]
    }
    wrapped = mount(
      <Root
        initialState={initialState}>
        <CommentList />
      </Root>)
  })
  afterEach(() => {
    wrapped.unmount()
  })
  it('Creates one li tag per a comment', () => {

    expect(wrapped.find('li').length).toEqual(2)

  })
  it('Renders correct comment text', () => {
    expect(wrapped.render().text()).toContain(comment1)
    expect(wrapped.render().text()).toContain(comment2)
  })
})
