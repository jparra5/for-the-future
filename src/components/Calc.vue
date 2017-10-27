<template>
<div class="container">
  <div class="calc-body">
    <div class="calc-screen">
      <div class="calc-operation">2536 + 419 + </div>
      <div class="calc-typed">{{this.compute}}</div>
    </div>
    <div class="calc-button-row">
      <div class="button c" v-on:click="buttonClick('clear', $event)">C</div>
      <div class="button l" v-on:click="buttonClick('notequal', $event)">≠</div>
      <div class="button l" v-on:click="buttonClick('percent', $event)">%</div>
      <div class="button l" v-on:click="buttonClick('divide', $event)">/</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="buttonClick('7', $event)">7</div>
      <div class="button" v-on:click="buttonClick('8', $event)">8</div>
      <div class="button" v-on:click="buttonClick('9', $event)">9</div>
      <div class="button l" v-on:click="buttonClick('multiply', $event)">x</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="buttonClick('4', $event)">4</div>
      <div class="button" v-on:click="buttonClick('5', $event)">5</div>
      <div class="button" v-on:click="buttonClick('6', $event)">6</div>
      <div class="button l" v-on:click="buttonClick('minus', $event)">−</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="buttonClick('1', $event)">1</div>
      <div class="button" v-on:click="buttonClick('2', $event)">2</div>
      <div class="button" v-on:click="buttonClick('3', $event)">3</div>
      <div class="button l" v-on:click="buttonClick('plus', $event)">+</div>
    </div>
    <div class="calc-button-row">
      <div class="button" v-on:click="buttonClick('period', $event)">.</div>
      <div class="button" v-on:click="buttonClick('0', $event)">0</div>
      <div class="button" v-on:click="buttonClick('lessthan', $event)"><</div>
      <div class="button l" v-on:click="buttonClick('equal', $event)">=</div>
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
      compute: '4444'
    }
  },
  methods: {
    buttonClick: function (btn, event) {
      // now we have access to the native event
      alert('Button: ' + btn)
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
