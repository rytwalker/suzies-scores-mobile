import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Navigator from './src/navigation/index';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
