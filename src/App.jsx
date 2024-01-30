import { Header } from './Components/Herder';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';


function App() {
 
  return (   
    <div>
    <Header/>
    <div className={styles.wrapper}> 
    <Sidebar/>
    <main>
      <Post/>
    </main>
    </div>
    </div>
  )
}

export default App
