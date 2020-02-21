<template>
	<div class="roundtable">
	<div class="center">
	<div class="roundtable-up">
		<div class="title">圆桌</div>
		<div class="right-title">举办圆桌</div>
	</div>
	<div class="body1">
	<div class="roundtable-down" v-for="alltable in roundtableList" v-bind:key="alltable.id">
		<div class="table">
		<div class="table-image" v-bind:style="{'background-image':'url('+alltable.banner+')'}"><span>{{alltable.name}}</span></div>
		<div class="table-content">该圆桌被浏览{{alltable.visitsCount}}次</div>	
		</div>
	</div>
	
	</div>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				roundtableList:[]
			}
		},
		methods:{
			loadData(){
				this.$http.get("http://localhost:9091/api/roundtable/all")
				.then((result) => {
					console.log("roundtable on vue");
					this.roundtableList=result.data.data;
					console.log("roundtable",this.roundtableList)
				})
				.catch(() => {})
				.finally(() => {});
			}
		},
		mounted:function(){
			console.log("roundtable on load")
			this.loadData();
		}
	}
</script>

<style scoped>
	.roundtable{
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 5px;
	}
	.center{
		width: 1032px;
		background: #FFFFFF;
	}
	.roundtable-up{
		display: flex;
		flex-direction: row;
		border-bottom:1px solid #F5F5F5;
		justify-content:space-between;
	}
	.roundtable-up .title{
	margin: 20px 20px;
	font-weight: 600;
	}
	.roundtable-up .right-title{
	margin: 20px 20px;
	color: #0084FF;
	font-weight: 600;
	}
	.body1{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-left: 5px;
		flex-wrap:wrap;
	}
	.roundtable-down{
		display: flex;
		flex-direction: column;
	}
	.table{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 20px 15px;
		margin-right: 10px;
	}
	.table .table-image{
		width: 200px;
		height: 200px;
		background: url(../assets/table.png);
		position: relative;
		background-size:cover ;
		background-position: center;
		border-radius: 10px;
	}
	.table .table-image span{
		color: #FFFFFF;
		position: absolute;
		left: 0;
		bottom: 0;		
		padding: 10px;
	}
	.table .table-content{
		z-index: 2;
		font-size: 17px;
		color: #999999;
		margin: 20px 0px;
	}
	
	
</style>
