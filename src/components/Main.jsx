import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    return ( 
    <div className="main">
        <div className="item-list">
            <div className="item-list__header">
                <h2>Artistas populares</h2>
                <a className="item-list__link" href="">Mostrar tudo</a>
            </div>

            <div className="item-list__container">

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Henrique & Juliano</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9" alt="Imagem do Artistas MC TUTO" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">MC Tuto</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706" alt="Imagem dos Artistas Jorge & Mateus" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Jorge & Mateus</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192" alt="Imagem do Artista Nattan" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">NATTAN</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1" alt="Imagem do Grupo Menos É Mais" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Grupo Menos É Mais</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e" alt="Imagem dos Artistas Zé Neto & Cristiano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Zé Neto & Cristiano</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a" alt="Imagem dos Artistas Matheus & Kauan" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Matheus & Kauan</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45" alt="Imagem do Artista Oruam" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Oruam</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174acfec0b96ba96562ad2e7fa3" alt="Imagem do Artista Murilo Huff" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Murilo Huff</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab6761610000517483f19000f18fbec5cf328f59" alt="Imagem dos Artistas Hugo & Guilherme" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Hugo & Guilherme</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174ec1fef19ee9676f9ce662f39" alt="Imagem do Artista MC Luuky" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">MC LUUKY</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174281fcf09827f1223ca4d729c" alt="Imagem do Artista Léo Foguete" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Léo Foguete</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174dbfd9763ee6948c110999581" alt="Imagem do Artista Gustavo Lima" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Gustavo Lima</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744ba71e7bb7139281802eb42e" alt="Imagem do Artista Nilo" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Nilo</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174121da419911d33812cfd481e" alt="Imagem do Artista Luan Pereira" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Luan Pereira</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174946d345050cf85e1b67e00d3" alt="Imagem do Artista Guilherme & Benuto" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Guilherme & Benuto</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25" alt="Imagem da Artista Marília Mendonça" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Marília Mendonça</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista Luan Santana" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Luan Santana</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174a291b99de1602566f8d57725" alt="Imagem do Artista Gustavo Mioto" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Gustavo Mioto</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174a4d221889e774d4b173aeaa0" alt="Imagem do Artista Henry Freitas" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Henry Freitas</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

            </div>
          
        </div> 

        <div className="item-list">
            <div className="item-list__header">
                <h2>Músicas populares</h2>
                <a className="item-list__link" href="">Mostrar tudo</a>
            </div>

            <div className="item-list__container">

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

                <div className="single-item">
                    <div className="single-item__div-image-button">
                        <div className="single-item__div-image">
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem dos Artistas Henrique e Juliano" />
                        </div>

                        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                    </div>
                    <div className="single-item__texts">
                        <div className="single-item__2lines">
                            <p className="single-item__title">Amo Noite E Dia - Live In Sao Paulo / 2010</p>
                            <p className="single-item__type">Artista</p>
                        </div>
                    </div>
                </div>

            </div>

           
        </div>  

    </div>
    );
};

export default Main;