import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />

        <div className={styles.profile}>
            <Avatar 
                hasBorder={true}
                src="https://github.com/anjosmarcos.png" />

            <strong>Marcos Alexandre</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}