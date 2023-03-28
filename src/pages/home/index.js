import React from 'react';
import BasicForm from "../../components/ComponetForm";
import logo from '../../assets/logo-light.svg'
import './style.css';

function Man() {
    return (
        <div className='container-home'>
            <header><img src={logo} alt='logo page' /></header>
            <h1>QR Code Image Generator</h1>
            <BasicForm />
        </div>
    );
}

export default Man;