import React, { Component } from 'react'

class PostInput extends Component {

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  state = {
    isFocused: false
  }

  updateState = (d, e) => this.setState({ [ e ]: d });

  componentDidMount() {
    this.onFocus = e => this.updateState(true, 'isFocused');
    this.onBlur = e => this.updateState(false, 'isFocused');
    this.input.current.addEventListener('focus', this.onFocus, true);
    this.input.current.addEventListener('blur', this.onBlur, true);
  }

  componentWillUnmount() {
    this.input.current.removeEventListener('focus', this.onFocus, true);
    this.input.current.removeEventListener('blur', this.onBlur, true);
  }

  render() {
    return (
      <div className="UserPostInput" ref={ this.input }>
        <textarea placeholder="Ta afim de falar alguma coisa?" />
      </div>
    )
  }
}

export default PostInput;
