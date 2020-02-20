<template>
  <div class="about">
		<news></news>
    <round-table></round-table>
		<save></save>
		<special></special>
  </div>
</template>

<style>
	
</style>

<script>
	import roundTable from '../components/RoundTable.vue';
	import news from '../components/News.vue'
	import save from '../components/Save.vue'
	import special from '../components/Special.vue'
	export default{
		components:{roundTable,news,save,special}
	}
</script>