import api from './api'

export default async function BuscaTodosLivros() {
  try {
    const resultado = await api.get(
      '/lists/full-overview.json?api-key=DdUDH1G8SAU50EnsxKSq3Fr30n4J0Kn7'
      
    )
    return resultado.data
  } catch (error) {
    console.log(error)
    return []
  }
}
