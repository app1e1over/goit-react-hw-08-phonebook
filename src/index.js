import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import { App } from 'components/App'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)