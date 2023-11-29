import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <div className="card">
            <div className="card--header" />
            <img
                className="avatar"
              //  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                src="data:image/jpeg;base64,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"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">Ruma Khan</p>
                    <p className="text-sub">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
