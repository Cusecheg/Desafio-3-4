import styles from './Footer.module.css';
import {FaInstagram, FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa';


function Footer({contact, email, linkLinkedin, linkGithub, linkInstagram, linkWhatsaap}){
    return (
        <div className={styles.footer} id='Contact'>
            <div>
                <h2>Meu Contato:</h2>
                <p><a href={linkWhatsaap}><FaWhatsapp size={30}/></a>{contact}</p>
            </div>
            <div>
                <h2>Email:</h2>
                <p>{email}</p>
            </div>
            <ul>
                <li><a href={linkLinkedin}><FaLinkedin size={30}/></a></li>
                <li><a href={linkGithub}><FaGithub size={30}/></a></li>
                <li><a href={linkInstagram}><FaInstagram size={30}/></a></li>
            </ul>

        </div>

    )
}

export default Footer;