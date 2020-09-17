import React from 'react';
import './Home.scss';
import {
  Header,
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Component6,
  Component7,
  Component8,
  Component9,
  Component10,
  Footer,
  ButtonWhatsapp,
} from '../../components'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Component1/>
        <Component2/>
        <Component3/>
        <Component4/>
        <Component5/>
        <Component6/>
        <Component7/>
        <Component8/>
        <Component9/>
        <Component10/>
        <Footer/>
        <ButtonWhatsapp/>
      </div>
    );
  }
}