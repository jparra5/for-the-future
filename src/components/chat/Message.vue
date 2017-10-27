<template>
  <div>
    <h1>{{textMessage.name}} says:</h1>
    <h2>{{textMessage.message}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    textMessage: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
