import Card from "../Elements/Card"
import styles from './Projects.module.css'
import imgCard from '../Images/imgCard.svg'
import lpdnc from '../Images/lpdnc.svg'




function Projects() {




    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>

            <Card
                link1='https://benevolent-torrone-2e6dbd.netlify.app/'
                img1={lpdnc}
                title1='Landing Page Dnc'
                text1='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnología.'
                link2='https://eclectic-cannoli-0b5baf.netlify.app/'
                img2={imgCard}
                title2='Dnc Weather'
                text2='Criação de uma Interface Web para consultas de endereço e previsão do tempo.'

            />
        </div>
    )
}

export default Projects;