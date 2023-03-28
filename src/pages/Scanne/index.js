import './style.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { getItem } from '../../utils/storage';
import logo from '../../assets/logo-light.svg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'


function Scanne() {
    const [qrcodeLink, setQrcodeLink] = useState('')
    const name = getItem('name')
    const url = `https://qr-code-image-generator-seven.vercel.app/User/${name}`

    function handleGenerate(link_url) {
        QRCodeLink.toDataURL(link_url, {
            width: 600,
            margin: 5,
        }, function (err, url) {
            setQrcodeLink(url)
        })
    }
    useEffect(() => {
        handleGenerate(url)

    }, [url])
    return (
        <div className='container-scanner'>
            <header><img src={logo} alt='logo page' /></header>
            <h1>{name}</h1>

            <strong>Scanne Me</strong>
            <QRCode value={url} width='800px' />
            <Link to={qrcodeLink} download={'qrcodeLink.png'}><button className='btn-basic scanne'>Download QRCode</button></Link>
        </div>
    );
}

export default Scanne