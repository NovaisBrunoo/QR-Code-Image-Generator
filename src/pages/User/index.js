import './style.css';
import { useParams } from 'react-router-dom'
import logo from '../../assets/logo-light.svg'
import { useEffect, useState } from 'react'
import api from '../../api/api'

function User() {
    let { userName } = useParams();
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');

    useEffect(() => {
        try {
            async function TableTitle() {
                const response = await api.get(`/User/${userName}`)
                setGithub(response.data.github)
                setLinkedin(response.data.linkedin)
            }
            TableTitle()
        }
        catch (error) {
            console.log(error)
        }

    }, [userName])
    return (
        <div className='container-user'>
            <header><img src={logo} alt='logo page' /></header>

            <h1>Hello ,my name is {userName}</h1>

            <h4>My History</h4>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
            <div className='container-btn'>
                <a href={linkedin} ><button className='btn-basic'>Linkedin</button></a>
                <a href={github} ><button className='btn-basic'>Github</button></a>
            </div>
        </div >
    )
}

export default User