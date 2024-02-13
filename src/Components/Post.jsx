import style from './Post.module.css';

export function Post() {
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img src="https://github.com/anjosmarcos.png" />
                    <div className={style.authorInfo}>
                        <strong>Marcos Alexandre</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='12 de Fevereiro de 2024' dateTime="2024-02-12 22:44:00">
                    Publicado há 10 min
                </time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '} 
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>    
                </p>
            </div>
        </article>
    )
}