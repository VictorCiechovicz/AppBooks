import api from './api'

export default async function BuscaBiografia() {
  try {
    const resultado = await api.get(
      '/lists/combined-print-and-e-book-fiction.json?api-key=DdUDH1G8SAU50EnsxKSq3Fr30n4J0Kn7'
    )
    return resultado.data
  } catch (error) {
    console.log(error)
    return []
  }
}
