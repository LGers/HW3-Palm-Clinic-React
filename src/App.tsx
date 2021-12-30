import React from "react";
import Routes from "./Routes/Routes";
import { store } from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
