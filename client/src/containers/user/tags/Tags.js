import React from 'react';

import Tag from './tag/Tag';

const tags = props => {
  return (
    <div className="Tags">
      {props.tags.map((tag, i) =>
        <Tag
          tag={tag}
          key={i} />)}
    </div>
  )
}

export default tags;
