import styles from './Card.module.css';
import Button from './Button';


function Card({ img1, title1, text1, link1, img2, title2, text2, link2 }) {

    return (
        <div className={styles.card}>
        
                <section>
                    <img src={img1} alt="erro" />
                    <h2>{title1}</h2>
                    <p>{text1}</p>

                   <a href={link1}><Button id="btn" text='Clique aqui' /></a>
                </section>
    
      
                <section>
                    <img src={img2} alt="erro" />
                    <h2>{title2}</h2>
                    <p>{text2}</p>

                   <a href={link2}><Button id="btn" text='Clique aqui' /></a>
                </section>
    
        </div>


    )
}

export default Card;