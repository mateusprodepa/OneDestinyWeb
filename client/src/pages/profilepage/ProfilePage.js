import React, { Component } from 'react';

import './ProfilePage.css';

import UserMenuDisplay from '../../components/user_menu_display/UserMenuDisplay';
import UserFeedWrapper from '../../components/user_feed_wrapper/UserFeedWrapper';
import RecommendedTables from '../../components/recommended_tables/RecommendedTables';
import UserPostBlock from '../../components/post_block/PostBlock';
import Navbar from '../../components/signed_in_navbar/Navbar';
import UserBlock from '../../containers/user/User';

import { userFetchData } from '../../actions/user';

import { connect } from 'react-redux';

class ProfilePage extends Component {

  state = {
    user: {}
  }

  updateUserState = user => this.setState({ user });

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { user } = this.props;

    return (
      <div className="ProfilePage">
        <Navbar />
        <UserBlock
          userData={ user ? user : this.state.user } />

        <div className="UserStuffWrapper">
          <UserMenuDisplay status={ user && user.Usuario_Status ? user.Usuario_Status : this.state.user.Usuario_Status } />
          <UserPostBlock/>
          <UserFeedWrapper />
          <RecommendedTables />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  hasErrored: state.userDataHasErrored,
  isLoading: state.userDataIsLoading
})

const mapDispatchToProps = dispatch => ({ fetchData: url => dispatch(userFetchData()) })

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
