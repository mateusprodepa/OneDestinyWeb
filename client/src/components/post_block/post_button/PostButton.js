import React from 'react'

const postButton = props => {
  return (
    <div className="UserPostButton">
      <div>
        <img src={ props.icon } alt="post-icon" />
        <span>{ props.text }</span>
      </div>
    </div>
  )
}

export default postButton;
