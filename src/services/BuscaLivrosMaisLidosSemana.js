import api from './api'

export default async function BuscaLivrosMaisLidosSemana() {
  try {
    const resultado = await api.get(
      '/svc/books/v3/lists/overview.json?api-key=DdUDH1G8SAU50EnsxKSq3Fr30n4J0Kn7'
    )
    return resultado.data
  } catch (error) {
    console.log(error)
    return []
  }
}
