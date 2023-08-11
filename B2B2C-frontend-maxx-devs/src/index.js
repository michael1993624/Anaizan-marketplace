import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { InLineLoader } from "./components/InlineLoader/InlineLoader";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
