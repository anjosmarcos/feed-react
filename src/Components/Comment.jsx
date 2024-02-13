import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/anjosmarcos.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Marcos Alexandre</strong>
                            <time>há 3 minutos</time>
                        </div>

                        <button title='Deletar'>
                            <Trash size={24} weight='bold' />
                        </button>
                    </header>

                    <p>Muito bom Devon, Parabens</p>
                </div>

                    <footer>
                        <button>
                            <ThumbsUp size={24} weight='bold' />
                            Aplaudir <span>10</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}