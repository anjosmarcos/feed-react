import { Header } from "./Components/Header"
import { Post } from "./Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./Components/Sidebar"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Marcos Alexandre" content="Hello, world!" />
          <Post author="Marcos Anjos" content="Hi, world!" />
        </main>
      </div>
    </div>
  )
}

export default App

