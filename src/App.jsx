import { useState, useEffect } from 'react'

const App = () => {
  const [nomeDaCidade, setNomeDaCidade] = useState('')
  const [dadosDoClima, setDadosDoClima] = useState('')

  const pegarDadosDoClima = async () => {
    try {
      const response = await fetch(
        `https://wttr.in/${nomeDaCidade}?format=%t+%C+%w+%m`
      )
      const data = await response.text()
      setDadosDoClima(data)
    } catch (error) {
      console.error('Erro ao pegar os dados:', error)
    }
  }
  useEffect(() => {
    pegarDadosDoClima()
  }, [nomeDaCidade])

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
