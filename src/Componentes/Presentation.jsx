import styles from './Presentation.module.css'
import Button from '../Elements/Button';
import { useEffect, useState } from 'react';



function Presentation() {
    const [user, setUser] = useState('');

    useEffect(() => {
            fetch('https://api.github.com/users/cusecheg')
            .then((res) => res.json())
            .then((json) => setUser(json));
            
    }, []);


    return (
        <div className={styles.presentation}>
            <div>
                <h1>Olá, meu nome é Juan Useche!</h1>
                <p> Sou um apaixonado por tecnologia e soluções inovadoras. <br />
                    Atualmente me formando em Tecnología na escola DNC como Dev Full-Stack.<br />
                    Estou sempre em busca de novos desafios para superar.</p><br />
                <a href='https://www.linkedin.com/in/juan-useche-79b395235/'><Button text='Saber mais' /></a>
            </div>
            <div>
                <img src={user.avatar_url} alt="avatar" />
            </div>
        </div>


    )
}
export default Presentation;