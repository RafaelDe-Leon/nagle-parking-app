import React, { Component } from 'react';
import Subnav from '../components/Subnav';
import '../components/Mypickup/mypickup.css';

import Mypickupform from '../components/Mypickupform';

import MypickUp from '../components/Mypickup';
import API from '../utils/API';

class MyPickup extends Component {
  state = {
    userData: {},
    isMonthly: false
  };

  componentDidMount() {
    API.getUser()
      .then(res => {
        console.log(res.data);
        res.data.isMonthly
          ? this.setState({ userData: res.data, isMonthly: true })
          : this.setState({ isMonthly: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Subnav />

        {this.state.isMonthly === false ? <Mypickupform /> : <MypickUp />}
      </div>
    );
  }
}

export default MyPickup;
