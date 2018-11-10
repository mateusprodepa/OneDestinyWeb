import React from 'react';

const colors = [ '#F74D4D', '#4D994D', '#4D4DF7' ]

function getRandomArrayItem(array) {
  return Math.floor(Math.random() * array.length)
};

const tag = props => {
  return (
    <div
      style={{
        backgroundColor: colors[getRandomArrayItem(colors)]
      }}
      className="Tag">
      { props.tag }
    </div>
  )
}

export default tag;
