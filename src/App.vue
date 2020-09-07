<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col title">
          <h1 class="text-center">
            Calculadora IMC <br/>
            <span>Pessoas a partir de 20 anos</span>
          </h1>
        </div>
      </div>
      <CalculadoraImc/>
      <footer class="copyright text-right">
        <p>
          by <a href="https://github.com/rayanmarcus" target="_blank">@rayanmarcus</a><br/>
          Feito com Vue.js 💚
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import CalculadoraImc from './components/CalculadoraImc.vue'

export default {
  name: 'App',
  components: {
    CalculadoraImc
  }
}
</script>

<style lang="scss">
@import './assets/scss/global/_variables.scss';

#app {
  .title{
    margin-top: 2em;
    h1{
      color: $white;
      line-height: 0.7;
      span{
        color: #8289A3;
        font-size: 0.52em;
      }
    }
  }
  footer.copyright{
    margin: 1em 0em 0em;
    p{
      margin: 0;
      padding: 0;
      color: #1E2B63;
      font-family: $font-family-Nunito;
      font-weight: 400;
      a{
        color: #5161a8;
        &:hover{
          text-decoration: initial;
        }
      }
    }
  }
}
</style>
