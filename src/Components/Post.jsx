import style from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react';


export function Post({author, publishedAt, content}) {
    const [newCommentText, setNewCommentTest] = useState('')
    
    const [comments, setComments] = useState([
        'Post muito bom!',
    ])

    const publishedAtForFormatted = format(publishedAt, "dd 'de' LLLL 'ás ' HH:mm", {
        locale: ptBR
    
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNewComment() {
        event.preventDefault()

        
        setComments([...comments, newCommentText])
        setNewCommentTest('')
    }

    function handleNewCommentChange(event) {
        setNewCommentTest(event.target.value)
    }

    function deleteComment(commentToDelete) {
        // imuutabilidade - não altera o estado atual
        
        // filter retorna um novo array
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        // filter retorna um novo array
        setComments(commentsWithoutDeleted)
    }

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
                    return <p key={line.text}>{line.text}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.text}>
                        <a href="#">{line.text}</a>;
                    </p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="O que você achou do projeto?"
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={style.commentList}>
               {comments.map(comment => (
                   <Comment 
                        key={comment}  
                        content={comment}
                        onDeleteComment={deleteComment} 
                    />
               ))}

            </div>
        </article>
    )
}