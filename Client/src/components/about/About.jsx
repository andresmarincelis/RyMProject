import React from "react";
import styles from './About.module.css';

const About = function () {
    return (

        <div className={styles.aboutContainer}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p className={styles.aboutText}>¡Hola! Soy Andrés Marin. Estoy poco a poco aprendiendo sobre programacion. Aun no le he puesto mucho diseño a la página ya que cada día la voy modificando de acuerdo a lo que me vayan enseñando y me di cuenta que si modifico mucho el diseño despues cuando agrego componentes o funcionalidades todos los cambios de CSS tiran error</p>
            <p className={styles.aboutText}>Con respecto a este proyecto de React fue creado para el BootCamp de Henry que estoy realizando. Espero que encuentres la información aquí útil y te guste el resultado.</p>
            <p className={styles.aboutText}>No dudes en contactarme si tienes alguna pregunta o sugerencia. ¡Gracias por visitar!</p>
        </div>
    )
}

export default About;