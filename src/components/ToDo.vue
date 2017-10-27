<template>
  <div class="bigdiv">
    todo stuff
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submitMessage: function () {
      console.log('jaime was here')
      alert('User typed: ' + this.userInput)

      this.textMessages.push({
        name: 'Justin',
        message: this.userInput
      })

      this.userInput = '';
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
  .bigdiv {
    overflow: scroll
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
