import { Post } from "./Post"

function App() {
  return (
    <div>
       <Post 
      author="Marcos Alexandre" 
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, sit pariatur consequuntur dolorum assumenda est ipsam nostrum a fugiat in ut dolorem fuga numquam. Veritatis laboriosam distinctio corporis incidunt fuga!"
    />
    <Post 
      author="Segundo Autor" 
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, sit pariatur consequuntur dolorum assumenda est ipsam nostrum a fugiat in ut dolorem fuga numquam. Veritatis laboriosam distinctio corporis incidunt fuga!"
    />
    </div>
  )
}

export default App

