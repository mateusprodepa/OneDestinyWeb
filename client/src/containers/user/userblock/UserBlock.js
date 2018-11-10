import React from 'react';

const userBlock = props => (
  <div className="UserProfileBlock" style={props.bgImage}>
    <div className="UserProfileWrapper">
      <div className="UserProfileFlex">

        <div className="UserBlockImage">
          { props.context.renderUserProfileImage() }
        </div>

        <div className="UserBlockName">
          <h3>{ props.username } ({ props.nickname })</h3>
          { props.context.renderTags() }
        </div>

      </div>
    </div>
  </div>
)

export default userBlock;
