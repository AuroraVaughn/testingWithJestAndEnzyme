import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root'
describe('Comment Box', () => {
  let wrapped
  beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>)
  })
  afterEach(() => {
    wrapped.unmount()
  })
  describe('Comment Box renders', () => {
    it('has a text area and a button', () => {
      expect(wrapped.find('textarea').length).toEqual(1)
      expect(wrapped.find('button').length).toEqual(1)
    });
  })

  describe('Comment Box events', () => {
    const text = 'Pretend I typed this.'
    // beforeEach(() => {
    //   wrapped.find('textarea')
    //     .simulate('change', {
    //       target: { value: text }
    //     })
    //   wrapped.update()

    // })
    it('allows user to enter text in textarea', () => {
      wrapped.find('textarea').simulate('change', {
        target: { value: text }
      })
      wrapped.update()
      expect(wrapped.find('textarea').prop('value')).toEqual(text)

    })
    it('Clears text when comment is submitted', () => {
      wrapped.find('textarea').simulate('change', {
        target: { value: text }
      })
      wrapped.update()
      wrapped.find('form')
        .simulate('submit')

      wrapped.update()

      expect(wrapped.find('textarea').prop('value')).toEqual('')


    })
  })
})
