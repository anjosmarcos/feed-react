import { Header } from "./Components/Header"
import { Post } from "./Components/Post"
import { Sidebar } from "./Components/Sidebar"
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/anjosmarcos.png",
      name: "Marcos Alexandre",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', text: '👉 jane.design/doctorcare'},
      {type: 'link', text: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: '2024-02-12 19:44:00',
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO na Rocketseat"
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', text: '👉 jane.design/doctorcare'},
      {type: 'link', text: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: '2024-02-12 20:44:00',
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', text: '👉 jane.design/doctorcare'},
      {type: 'link', text: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: '2024-02-12 21:44:00',
  },
]



function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => ( 
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App

