import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { useApolloClient } from '@apollo/client'
import { useGetSimpleTestQuery } from './gql/types-and-hooks'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import useApiClients from './components/ApiProvider/useApiClients'

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const result = useGetSimpleTestQuery();
  console.log(result)

  // const client = useApolloClient();
  const { mugClient, cosmosClient } = useApiClients()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Input
        type="email"
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="password"
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button onClick={async () => {
          try {
            const result = await mugClient.loginPost(true, false, {
              email: email,
              password: password
            })
            console.log(result)
          } catch(err) {
            console.log(err);
          }
        }} >Click Me</Button>
        <Button onClick={async () => {
          try {
            const result = await cosmosClient.cosmosCosmostestGet()
            console.log(result)
          } catch(err) {
            console.log(err);
          }
        }} >Next Click Me</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
