import React from 'react';
import './Home.scss';
import { Header } from '../../components/Header/Header'
import { Component1 } from '../../components/Component1/Component1'
import { Component2 } from '../../components/Component2/Component2'
import { Component3 } from '../../components/Component3/Component3'
import { Component4 } from '../../components/Component4/Component4'
import { Component5 } from '../../components/Component5/Component5'
import { Component6 } from '../../components/Component6/Component6'
import { Component7 } from '../../components/Component7/Component7'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Component1></Component1>
        <Component2></Component2>
        <Component3></Component3>
        <Component4></Component4>
        <Component5></Component5>
        <Component6></Component6>
        <Component7></Component7>
      </div>
    );
  }
}