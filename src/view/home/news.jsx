import React, { Component } from 'react';

class HomeNewsView extends Component {
  componentDidMount() {
    this.props.query({ page: 1, size: 10 })
  }
  render() {
    return <div>123</div>
  }
}

export default HomeNewsView;
