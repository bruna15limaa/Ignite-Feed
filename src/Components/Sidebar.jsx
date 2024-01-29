import styles from './Sidebar.module.css';
import backgrounJpg from '../assets/background.jpg'
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={backgrounJpg}
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/bruna15limaa.png" alt="foto de perfil" />
        <strong>Bruna Calheiros</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}