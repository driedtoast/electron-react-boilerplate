// 
import React from 'react';
import { hot } from 'react-hot-loader/root';
import HomePage from 'HomePage';

const Root = ({ store, history }) => (
  <HomePage />
);

export default hot(Root);