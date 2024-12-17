import React from 'react';
import Button from "./Button.js";
import "./Header.css";

export default function Header({ accessToken }) {
    return (<div className="Header">
        <h1>JAMMMING</h1>
        < Button accessToken={accessToken} />
    </div>);
}