import React from 'react';
import './App.css';
// we createStore from redux 
import { createStore } from 'redux';
// we need our reducer 
import { mantras } from './reducers';
// we need our smart containers 
import MantraForm from './containers/MantraFormContainer';
import MantraList from './containers/MantraListContainer';
// we need the Provider from react-reducx 
import { Provider } from 'react-redux';
const store = createStore(mantras);

export default function App() {
  return (
    <div className="App">
     <Provider store={store}>
       RUMI QUOTES 
        <MantraForm />
        <MantraList />
       </Provider>
    </div>
  );
}

