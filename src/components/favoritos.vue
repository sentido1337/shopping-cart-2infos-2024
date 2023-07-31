<script setup>
import MButton from '@/components/MButton.vue';
import MMessage from '@/components/MMessage.vue';
import { favoritos, adicionarAoFavorito, removerItemFavorito, limparFavorito } from '@/_data/favoritos.js'

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>
<template>
    <div class="wrap-favoritos">
      <p v-if="carrinho.itens.length === 0">você não tem nada nos favoritos</p>
      <m-messagge v-if="carrinho.itens.length === 0"/>
      <div v-else>
        <div class="item-favorito" v-for="(item, index) in carrinho.itens" :key="index">
          <div class="info-livro">
            <div class="imagem-livro">
              <img :src="item.img" class="icon-capa-livro" />
            </div>
            <div class="detalhes-livro">
              <div>
                <p>{{ item.title }}</p>
                <p class="info-livro-preco">{{ formatarPreco(item.price) }}/un</p>
              </div>
              <div>
                <p>
                  Quantidade:
                  <input
                    type="number"
                    v-model="item.quantidade"
                    @change="atualizaQuantidadeItem(item)"
                    min="1"
                  />
                </p>
                <MButton @click="removerItemFavorito(item)">&#128465;</MButton>
                <p>Total: {{ formatarPreco(item.total) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <MButton @click="deleteItens()" texto="Limpar"/>
<MButton @click="removerItemFavorito(props.livro)" texto="Remover dos Favoritos"></MButton>
<div class="favoritos">
</div>
</template>

<style scoped>
</style>