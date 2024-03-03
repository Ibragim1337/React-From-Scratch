<<<<<<< HEAD
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./store";
import App from "./App";

const rootContainer = document.querySelector("#root");

if (rootContainer === null) throw new Error("Can't find root container");
=======
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Can\'t find root container');
>>>>>>> 158e0bea8af56c2fe6de4c21ed8d70b5ffe6980e

const root = createRoot(rootContainer);

root.render(
<<<<<<< HEAD
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
=======
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
>>>>>>> 158e0bea8af56c2fe6de4c21ed8d70b5ffe6980e
