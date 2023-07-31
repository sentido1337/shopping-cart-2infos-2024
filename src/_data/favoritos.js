import { ref } from 'vue'
import {livros} from './livros.js'
let favoritos = ref({
  itens: []
})
  
  function removerItemFavorito(item) {
    const index = favoritos.value.itens.findIndex((i) => i.id === item.id)
    favoritos.value.total -= item.total
    favoritos.value.itens.splice(index, 1)
  }
  
  function adicionarAoFavorito(livro) {
    const index = favoritos.value.itens.findIndex((item) => item.id === livro.id)
    if (index === -1) {
      favoritos.value.itens.push({
        ...livro,
        quantidade: 1,
        total: livro.price
      })
      favoritos.value.total += livro.price
    } else {
      favoritos.value.itens[index].quantidade++
      favoritos.value.itens[index].total += livro.price
      favoritos.value.total += livro.price
    }
  }
  
  function limparFavorito() {
    favoritos.value.itens = [];
  }
  
  export { favoritos, adicionarAoFavorito, removerItemFavorito, limparFavorito }