<!-- .vue files are single file components -->
<!--  Vue Single-File Components (a.k.a. *.vue files, abbreviated as SFC) is a special file format that allows us to encapsulate the template, logic, and styling of a Vue component in a single file. -->
<!-- .vue files allows us to write our components in a single file, which is a great way to organize our code. -->
<!-- .vue files allows us to write vue apps (components specifically) in a much nicer, modular, and organized way -->
<!-- .vue files allows us to split our template (the html code that belongs to an app or component), the script part, and the style part into three different sections. -->
<!--  SFC files are files that contain three different sections: template, script, and styles. (html, javascript, and css) --> 
<!--  The template section allows us to write our html code for our app or component. -->
<!--  The script section allows us to write our javascript code for our app or component. -->
<!--  The styles section allows us to write our css code for our app or component. -->

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<!--  styles section allows us to write our css code for our app or component. -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- Build workflow -->
<!-- It's important to note that the .vue files are not supported by the browser. -->
<!-- The browser only understands javascript, so we need to compile our .vue files into javascript files that the browser can understand. -->