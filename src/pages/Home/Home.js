import React from 'react';
import './Home.scss';
import { Header } from '../../components/Header/Header'
import { Consectetur } from '../../components/Consectetur/Consectetur'
import { Video } from '../../components/Video/Video'
import { UtEuDolor } from '../../components/UtEuDolor/UtEuDolor'
import { Suspendisse } from '../../components/Suspendisse/Suspendisse'
import { Nullam } from '../../components/Nullam/Nullam'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Consectetur></Consectetur>
        <Video></Video>
        <UtEuDolor></UtEuDolor>
        <Suspendisse></Suspendisse>
        <Nullam></Nullam>
      </div>
    );
  }
}