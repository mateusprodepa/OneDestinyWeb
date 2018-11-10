import React from 'react';

const userMenuDisplay = props => {

  const style = {
    backgroundColor: props.status ? '#4d994d' : '#f74d4d'
  }

  const circleStyle = {
    backgroundColor: props.status ? '#79B879' : '#FF7272'
  }

  return (
    <div className="UserMenuDisplay">
      <div className="StatusUsuario" style={style}>
        <div className="UserStatusCircle" style={circleStyle}></div>
        <span>{ props.status ? "Jogando 1Destiny agora" : "Fora do jogo" }</span>
      </div>

      <div className="UserMenuDisplayOptions">
        <ul>
          <li><a href={ void(0) }>Grupos</a></li>
          <li><a href={ void(0) }>Mesas</a></li>
          <li><a href={ void(0) }>Ultimos Jogos</a></li>
        </ul>
      </div>
    </div>
  )
}

export default userMenuDisplay;
