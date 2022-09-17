import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Route, Routes} from "react-router-dom";


import './index.css';
import reportWebVitals from './reportWebVitals';
import IndexPage from "./components/IndexPage/IndexPage";
import Dashboard from "./components/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
