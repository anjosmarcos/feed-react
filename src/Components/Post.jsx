import style from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'


export function Post({author, publishedAt, content}) {
    const publishedAtForFormatted = format(publishedAt, "dd 'de' LLLL 'ás ' HH:mm", {
        locale: ptBR
    
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtForFormatted} dateTime={publishedAt.toString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
               {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.text}</p>;
                } else if (line.type === 'link') {
                    return <p>
                        <a href="#">{line.text}</a>;
                    </p>
                }
               })}
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="O que você achou do projeto?"
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment />
                <Comment />
                <Comment />

            </div>
        </article>
    )
}