<template>
<div class="container">
  <div class="calc-body">
    <div class="calc-screen">
      <div class="calc-operation">{{this.numbers.previous}} {{this.operands.previous}} {{this.numbers.current}}</div>
      <div class="calc-typed" v-bind:class="{ 'calc-error': hasError}">{{this.numbers.display}}</div>
    </div>
    <div class="calc-button-row">
      <div class="button c" v-on:click="buttonClick('c', $event)">C</div>
      <div class="button l" v-on:click="buttonClick('!=', $event)">≠</div>
      <div class="button l" v-on:click="buttonClick('%', $event)">%</div>
      <div class="button l" v-on:click="buttonClick('/', $event)">/</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="numberClick('7', $event)">7</div>
      <div class="button" v-on:click="numberClick('8', $event)">8</div>
      <div class="button" v-on:click="numberClick('9', $event)">9</div>
      <div class="button l" v-on:click="buttonClick('*', $event)">x</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="numberClick('4', $event)">4</div>
      <div class="button" v-on:click="numberClick('5', $event)">5</div>
      <div class="button" v-on:click="numberClick('6', $event)">6</div>
      <div class="button l" v-on:click="buttonClick('-', $event)">−</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="numberClick('1', $event)">1</div>
      <div class="button" v-on:click="numberClick('2', $event)">2</div>
      <div class="button" v-on:click="numberClick('3', $event)">3</div>
      <div class="button l" v-on:click="buttonClick('+', $event)">+</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="buttonClick('.', $event)">.</div>
      <div class="button" v-on:click="numberClick('0', $event)">0</div>
      <div class="button" v-on:click="buttonClick('<', $event)"><</div>
      <div class="button l" v-on:click="buttonClick('=', $event)">=</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hasError: false,
      numbers: {
        display: '44.44',
        previous: '54.45',
        current: '10.01',
        compute: '44.44'
      },
      operands: {
        previous: '+',
        current: '='
      },
      clearFlag: true
    }
  },
  methods: {
    calc: function () {
      switch (this.operands.previous) {
        case '!=':
          if (this.numbers.previous !== this.numbers.current) {
            return '1'
          } else {
            return '0'
          }
        case '%':
          break
        case '/':
          break
        case '*':
          break
        case '-':
          return Number(this.numbers.previous) - Number(this.numbers.current)
        case '+':
          return Number(this.numbers.previous) + Number(this.numbers.current)
        case '<':
          if (Number(this.numbers.previous) < Number(this.numbers.current)) {
            return '1'
          } else {
            return '0'
          }
      }
    },
    clear: function () {
      this.clearFlag = false
      this.numbers = {
        display: '',
        previous: '',
        current: '',
        compute: ''
      }
      this.operands = {
        previous: '',
        current: ''
      }
    },
    error: function () {
      this.hasError = true
      setTimeout(function () {
        this.hasError = false
      }.bind(this), 500);
    },
    numberClick: function (btn, event) {
      if (this.clearFlag) {
        this.clear()
      }
      if (this.numbers.current.length < 8) {
        this.numbers.current += btn
      } else {
        this.error()
      }
    },
    buttonClick: function (btn, event) {
      switch (btn) {
        case 'c':
          this.clear()
          break
        case '!=':
          break
        case '%':
          break
        case '/':
          break
        case '*':
          break
        case '-':
          break
        case '+':
          if (this.operands.previous === '') {
            this.operands.previous = '+'
            this.numbers.previous = this.numbers.current
            this.numbers.current = ''
            this.numbers.display = ''
          } else {
            this.numbers.compute = this.calc()
            this.numbers.previous = this.numbers.compute
            this.operands.previous = btn
            this.numbers.current = ''
            this.numbers.compute = ''
            this.numbers.display = ''
          }
          break
        case '.':
          if (this.numbers.current.length < 8 && this.numbers.current.indexOf('.') === -1) {
            this.numbers.current += btn
          } else {
            this.error()
          }
          break
        case '<':
          break
        case '=':
          this.numbers.compute = this.calc()
          this.numbers.current = this.numbers.compute
          break
      }
    },
    submitMessage: function () {
      alert('button clicked')
    }
  },
  computed: {
    woot: function () {
    }
  },
  created () {
    // similar to onload or onstart
    console.log('woot: ', this.textMessages)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #EAEBEC;
}

.container {
  width: 400px;
  margin: auto;
}

.calc-body {
  width: 275px;
  margin: auto;
  min-height: 400px;
  border: solid 1px #3A4655;
  box-shadow: 0 8px 50px -7px black;
}

.calc-screen {
  background: #3A4655;
  width: 100%;
  height: 150px;
  padding: 20px;
}

.calc-error {
  background: #8e0909;
}

.calc-operation {
  text-align: right;
  color: #727B86;
  font-size: 21px;
  padding-bottom: 10px;
  border-bottom: dotted 1px;
}

.calc-typed {
  margin-top: 20px;
  font-size: 45px;
  text-align: right;
  color: #fff;
}

.calc-button-row {
  width: 100%;
  background: #3C4857;
}

.button {
  width: 25%;
  background: #425062;
  color: #fff;
  padding: 20px;
  display: inline-block;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
  margin-right: -4px;
  border-right: solid 2px #3C4857;
  border-bottom: solid 2px #3C4857;
  transition: all 0.2s ease-in-out;
}

.button.l {
  color: #AEB3BA;
  background: #404D5E;
}

.button.c {
  color: #D95D4E;
  background: #404D5E;
}

.button:hover {
  background: #E0B612;
  //transform: rotate(5deg);
}

.button.c:hover,
.button.l:hover {
  background: #E0B612;
  color: #fff;
}

.blink-me {
  color: #E0B612;
}
</style>
