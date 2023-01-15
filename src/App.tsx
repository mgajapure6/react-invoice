import React from 'react';
import logo from './assets/svg/logo.svg';
import './assets/scss/_app.scss';
import { DefaultLayout } from './layout/DefaultLayout';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


export default class App extends React.Component {

  constructor(props: any){
    super(props);
  }

  render(){
    return (
      <DefaultLayout/>
    );
  }
  
}

