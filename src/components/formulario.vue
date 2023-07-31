<script setup>
import { ref} from 'vue';
const nome = ref('')
const email = ref('')
const  telefone = ref('')
const formaDePagamento = ref('')
const cpf = ref('')
const endereco = ref('')
const user = ref({
  avatar: null
})
function handleFileUpload(e) {
  const target = e.target
  if (target && target.files) {
    const file = target.files[0]
    user.value.avatar = URL.createObjectURL(file)
  }
}
const confirmar = ref(false)
</script>

<template>
  <form class="info" @submit.prevent="aceitar = !aceitar">
      <p>Nome:</p>
      <input type="text" v-model="nome" minlength="3" maxlength="20" placeholder="Nome" required autocomplete="on"/>
      <p>Email:</p>
      <input type="email" v-model="email" placeholder="Email" required autocomplete="on"/>   
      <p>telefone:</p>
      <input type="text" v-model="telefone" minlength="8" maxlength="15" required autocomplete="on">
      <p>forma de pagamento:</p>
      <input type="string" v-model="formaDePagamento">
      <p>CPF:</p>
      <input type="text" v-model="cpf" minlength="8" maxlength="11" required autocomplete="on">
      <p>endereço:</p>
      <input type="text" v-model="endereco" minlength="8" maxlength="11" required autocomplete="on">
      <div v-if="aceitar">formulario aceito</div>
  </form>

  <div v-if="aceitar" id="div">
<img :src="user.avatar" />
<p>{{ nome }}</p>
<p>{{ email }}</p>
<p>{{ telefone }}</p>
<p>{{ formaDePagamento}}</p>
<p>{{ endereço }}</p>
  </div>
</template>

<style scoped>


</style>