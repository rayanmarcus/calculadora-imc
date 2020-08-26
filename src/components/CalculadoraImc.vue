<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 card-calculadora-imc">
      <form class="form-calculadora-imc" onsubmit="return false;">
        <div class="col form-group form-calculadora mx-auto">
          <span>Seu peso</span>
          <money v-model="peso" v-bind="maskPeso" class="form form-control"></money>
          <span ref="msg-erro-peso" class="msg-erro">Digite o peso</span>
        </div>
        <div class="col form-group form-calculadora mx-auto">
          <span>Sua altura</span>
          <money v-model="altura" v-bind="maskAltura" class="form form-control"></money>
          <span ref="msg-erro-altura" class="msg-erro">Digite a altura</span>
        </div>
        <div class="col form-group form-calculadora mx-auto text-right">
          <button class="btn btn-dark" @click="calcularImc()">Calcular</button>
        </div>
      </form>
      <transition name="fade">
        <div v-if="exibirErroCalculo" class="col-12 resultado mx-auto erro-calculo">
          <h4 class="procure-ajuda text-center">
            <i class="fas fa-exclamation-triangle"></i>
            Há algo errado! Reveja os valores preenchidos.
          </h4>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="resultadoImc && exibirErroCalculo == false">
          <footer class="col-12 resultado mx-auto">
            <h2>Resultado</h2>
            <h3>{{ resultadoImc }} <span>de IMC</span></h3>
            <div class="progress">
              <div class="progress-bar" v-bind:style="{ backgroundColor: barraNivelObesidade }" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h3> {{ nivelObesidade }} </h3>
            <transition name="fade">
              <h4 v-show="nivelObesidade == 'Obesidade' || nivelObesidade == 'Abaixo do peso'" class="procure-ajuda text-center">
                <i class="fas fa-exclamation-triangle"></i>
                Procure a orientação de um profissional da saúde.
              </h4>
            </transition>
          </footer>
          <p class="fonte-imc">
            Fonte: <a href="https://www.saude.gov.br/component/content/article/804-imc/40509-imc-em-adultos" target="_blank">saude.gov.br</a>
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CalculadoraImc',
  props: {
  },
  data () {
    return {
      peso: 0.00,
      altura: 0.00,
      resultadoImc: null,
      nivelObesidade: null,
      barraNivelObesidade: null,
      exibirErroCalculo: false,
      msgErro: {
        peso: false,
        altura: false
      },
      maskPeso: {
        decimal: ',',
        thousands: '.',
        suffix: ' KG',
        precision: 2,
        masked: false
      },
      maskAltura: {
        decimal: ',',
        thousands: '.',
        suffix: ' m',
        precision: 2,
        masked: false
      }
    }
  },
  methods: {
    calcularImc () {
      var peso = this.peso
      var altura = this.altura

      if (!peso || !altura) {
        if (!peso) {
          this.$refs['msg-erro-peso'].style.opacity = 1
        } else {
          this.$refs['msg-erro-peso'].style.opacity = 0
        }
        if (!altura) {
          this.$refs['msg-erro-altura'].style.opacity = 1
        } else {
          this.$refs['msg-erro-altura'].style.opacity = 0
        }
        this.resultadoImc = null
        return false
      }

      this.$refs['msg-erro-peso'].style.opacity = 0
      this.$refs['msg-erro-altura'].style.opacity = 0

      var calculo = parseFloat((peso / (Math.pow(altura, 2))).toFixed(2))

      if (calculo <= 0) {
        this.exibirErroCalculo = true
        return false
      }

      this.exibirErroCalculo = false

      if (calculo < 18.5) {
        this.nivelObesidade = 'Abaixo do peso'
        this.barraNivelObesidade = '#ECF033'
      } else if (calculo >= 18.5 && calculo < 25) {
        this.nivelObesidade = 'Peso adequado'
        this.barraNivelObesidade = '#33F03B'
      } else if (calculo >= 25 && calculo < 30) {
        this.nivelObesidade = 'Sobrepeso'
        this.barraNivelObesidade = '#F0BB33'
      } else if (calculo >= 30) {
        this.nivelObesidade = 'Obesidade'
        this.barraNivelObesidade = '#F05533'
      }

      this.resultadoImc = calculo

      setTimeout(() => {
        document.getElementsByClassName('progress-bar')[0].setAttribute('id', 'progress-animate')
      }, 10)
      setTimeout(() => {
        document.getElementsByClassName('progress-bar')[0].removeAttribute('id')
      }, 2000)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../assets/scss/global/variables';
@import './../../node_modules/@fortawesome/fontawesome-free/css/all.css';

  .card-calculadora-imc{
    background: linear-gradient(105.43deg, #00092F 5.98%, #182760 103.55%);
    border-radius: 15px;
    padding: 1.8em 0 1em;
    margin: 30px 15px 0;
    transition: all 0.5s;
    .form-calculadora{
      max-width: 450px;
      margin-bottom: 0.5em;
      span{
      font-size: 1.1em;
      color: $white;
      }
      input{
        height: 45px;
        padding-left: 1em;
        background: #101E50;
        border-radius: 15px;
        border: none;
        margin-top: 5px;
        color: #fff;
        &:focus{
          box-shadow: 0 0 0 0.15rem #000930;
        }
      }
      span.msg-erro{
        opacity: 0;
        transition: all 0.2s;
        font-size: 0.9em;
        padding-left: 1em;
        color: rgba(150, 0, 0, 0.9);
      }
      button{
        height: 35px;
        width: 120px;
        background: $background-color-default;
        background-blend-mode: color, normal;
        border: none;
        border-radius: 15px;
        font-size: 1.2em;
        line-height: 1;
          box-shadow: 0 0 0 0.15rem #000930;
        &:hover, &:focus, &:active{
          background: $background-color-default;
          box-shadow: 0 0 0 0.1rem #021361;
          border: none;
        }
      }
    }
  }
  .erro-calculo{
    margin-top: 1em;
  }
  .resultado{
    max-width: 450px;
    color: $white;
    h2{
      font-size: 1.6em;
      margin-bottom: 10px;
    }
    h3{
      font-size: 1.5em;
      text-align: center;
      font-weight: bold;
      padding: 0;
      margin: 0;
      span{
        font-size: 0.7em;
      }
    }
    .progress{
      height: 5px;
      margin: 0.4em 0;
      .progress-bar{
        background: #33F03B;
        border-radius: 15px;
      }
      #progress-animate{
        animation: progress-animation 1.3s 1;
      }
    }
    .procure-ajuda{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #FAFF00;
      color: #0E1C4D;
      border-radius: 15px;
      font-size: 1em;
      font-weight: 600;
      padding: 0.5em 0;
      margin-top: 0.4em;
      i{
        font-size: 25px;
        color: #F05533;
        margin-right: 0.2em;
      }
    }
  }
  p.fonte-imc{
    font-size: 0.9em;
    text-align: right;
    margin: 1em 0 0;
    padding: 0 0.5em 0;
    color: #666B80;
    a{
      color: #5161a8;
      &:hover{
        text-decoration: initial;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
    transform: translate(0, 0);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
  }
  @keyframes progress-animation{
      0% { width: 0; }
      100% { width: 100%}
  }

</style>
