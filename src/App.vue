<template>
  <div id="app">
		<div style="position:fixed;top:0;left:0;width:100%;min-width:1080px;z-index:999;">
			<top-head></top-head>
		</div>
		<div style="padding-top:52px;">
			<router-view/>
		</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
	margin: 0 auto;
	background-color: rgba(246,246,246,0.9);
}
</style>

<script>
	import TopHead from './components/TopHead.vue';
	export default {
	  components: {
			TopHead
	
	  }
	}
</script>
