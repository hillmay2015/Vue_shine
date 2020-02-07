<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>user page</h2>
    <ul>
      <li>
       苹果
      </li>
      <li>
       香蕉
      </li>
      <li>
       栗子
      </li>
      <li>
      菠萝
      </li>
      <br>
      <li>
      榴莲
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
      杨桃
      </li>
      <li>
       葡萄
      </li>
      <li>
       西瓜
      </li>
      <li>
       荔枝
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is user page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
