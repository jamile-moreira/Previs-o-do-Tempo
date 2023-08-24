import { useState, useEffect } from 'react'

const App = () => {
  const [nomeDaCidade, setNomeDaCidade] = useState('')
  useEffect(() => {
    console.log(nomeDaCidade)
  }, [])

  return (
    <div>
      <h1>ClimaTempo</h1>

      <input
        type="text"
        placeholder="Digite o nome da sua cidade aqui"
        value={nomeDaCidade}
        onChange={(event) => setNomeDaCidade(event.target.value)}
      />
    </div>
  )
}
export default App
