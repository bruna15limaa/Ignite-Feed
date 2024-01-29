import { Header } from './Components/Herder';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './Components/Sidebar';


function App() {
 
  return (   
    <div>
    <Header/>
    <div className={styles.wrapper}> </div>
    <Sidebar/>
    <main></main>
    </div>
  )
}

export default App
