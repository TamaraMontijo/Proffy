import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

    function TeacherItem() {
        return (
            <article className="teacher-item">
                <header>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFMdyQLpvKZZQ/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=0G3Mc0fscgk3elwDBuRkU6cP98mmSQLla8fhPrf04FY" alt="Tamara Montijo"/>
                    <div>
                        <strong>Tamara Montijo</strong>
                        <span>Química</span>
                    </div> 
                </header>

                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma de minhas explosões.
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    );
}

export default TeacherItem;