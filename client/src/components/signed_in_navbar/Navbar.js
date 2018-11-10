import React, { Component } from 'react';

import './Navbar.css';

import Dice from '../../assets/img/dice2.png';
import Loupe from '../../assets/icons/loupe.png';
import Settings from '../../assets/icons/settings.png';
import User from '../../assets/icons/user.png';
import Friends from '../../assets/icons/friends.png';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../actions/user';

// import { user } from '../../utils/utils';

class Navbar extends Component {

  state = {
    Usuario_Imagem: null,
    username: null
  }

  updateState = data => this.setState({ Usuario_Imagem: data.Usuario_Imagem, username: data.username });

  componentDidMount() {
    // if(this.props.user[0]) user.fetchUserData().then(data => this.updateState(data));
  }

  render() {

    const { username, Usuario_Imagem } = this.props.user ? this.props.user : this.state;

    return (
      <nav className="UserPageNavbar">

        <div>

          <div className="navbar__brand">
            <img src={ Dice } alt="Dice" />
            <span>Destiny</span>
          </div>

          <div className="SearchBar">

            <input
              type="text"
              placeholder="Procurando por algo?" />

            <div className="Loupe">
              <img src={ Loupe } alt="Loupe" />
            </div>

          </div>

          <div className="ConfigBar">
            <ul>
              <li><a><img src={ Friends } alt="friends" /></a></li>
              <div className="NavbarDropdown">
                <li className="NavbarUserSettings"><a><img src={ Settings } alt="settings" /></a></li>
                <ul className="NavbarUserSettingsDropdown active">
                  <li><a>Meu perfil</a></li>
                  <li><a>Minhas Mesas</a></li>
                  <li><a>Segurança e Privacidade</a></li>
                  <li><a>Configurações</a></li>
                </ul>
              </div>
              <li className="NavbarUserImg" ><a><span className="NavbarUsername">{ username ? username : null }</span><img src={ Usuario_Imagem ? Usuario_Imagem : User } alt="user" /></a></li>
            </ul>
          </div>

        </div>

      </nav>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
