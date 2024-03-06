import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';



function Navbar({linkGithub, linkLinkedin}){
    return(
        <div className={styles.navbar}>

            <ul></ul>

            <ul>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Aboutme'>Sobre mim</Nav.Link></li>
                <li><Nav.Link href='#Contact'>Contacto</Nav.Link></li>
            </ul>


            <ul>
                <li><a href={linkGithub}><FaGithub size={30}/></a></li>
                <li><a href={linkLinkedin}><FaLinkedin size={30}/></a></li>
            
            </ul>
       
        </div>


    )
}

export default Navbar;