import React from 'react';

import Picture from '../../assets/icons/picture.png';
import VideoPlayer from '../../assets/icons/video-player.png';
import Website from '../../assets/icons/website.png';
// import RightArrow from '../../assets/icons/right-arrow.png';

import PostButton from './post_button/PostButton';
import PostInput from './post_input/PostInput';

const postBlock = props => {
    return (
      <div className="UserPostBlock">

        <div className="UserPostButtons">

          <PostButton
            icon={ Picture }
            text="Imagem" />

          <PostButton
            icon={ VideoPlayer }
            text="Video" />

          <PostButton
            icon={ Website }
            text="Link ou URL" />

        </div>

        <PostInput />

        <div className="UserPostSubmit">
          <button>Cancelar</button>
          <button>Postar</button>
        </div>

      </div>
    )
}

export default postBlock;
