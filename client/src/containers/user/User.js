import React from 'react';

import { background_images, tmp } from '../../config/config';

import Tags from './tags/Tags';
import UserTag from './userblock/UserBlock';

import './User.css';

const userBlock = props => {

  this.renderUserProfileImage = () => {
    const userImg = props.userData.Usuario_Imagem ?
                    props.userData.Usuario_Imagem :
                    tmp.USER_IMG

    const style = {
      backgroundImage: `url(${userImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }

    return <div><div style={style} className="UserProfileImage"/></div>

  }

  this.renderTags = () => {
    const user = props.userData;

    let tags = [];

    for(var x in user) {
      const s = user[x];

      if(s !== "") {
        if(typeof s !== 'number') {
          if(x.includes('Cenario') && !x.includes('Non')) {
            tags.push(s);
          }
        }
      }
    }

    return <Tags tags={ tags } />
  }

  this.renderUserBlock = () => {
    const { username, nickname } = props.userData;

    const self = this;

    const bgImage = {
      background: `url(${
        props.userData.Usuario_Back ?
        props.userData.Usuario_Back :
        background_images.snow})`,
    }

    return <UserTag
      context={ self }
      bgImage={ bgImage }
      username={ username }
      nickname={ nickname } />
  }

  return (
    <React.Fragment>
      <div className="UserBlock">
        { this.renderUserBlock() }
      </div>
    </React.Fragment>
  )
}

export default userBlock;
