<template>
  <div class="page-body">
 		 <div class="body-left">left</div>
 		 <div class="body-right">right</div>
 </div>
</template>

<style scoped>
	.page-body{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.body-left{
		width: 700px;
		height: 1000px;
		background: #0084FF;
		margin-top: 10px;
		margin-right: 10px;
	}
	.body-right{
		width: 300px;
		height: 1000px;
		background: #42B983;
		margin-top: 10px;
	}
</style>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>
