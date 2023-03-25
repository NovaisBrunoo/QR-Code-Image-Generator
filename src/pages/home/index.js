import BasicForm from "../../components/ComponetForm";
import BasicButton from '../../components/BasicButton'
import React from 'react';
import './style.css';

function Man() {
    return (
        <div className='container'>
            <h1>QR Code Image Generator</h1>
            <BasicForm />
            <BasicButton />

        </div>
    );
}

export default Man;