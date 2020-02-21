<template>
	<div class="news-root">
		<div class="news-center">
		<div class="news-title">
			<svg class="Zi Zi--EditCircle" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z" fill-rule="evenodd"></path></svg>
			<span>专栏</span>
			</div>

  <div class="body1">
	<div class="special-body" v-for="special in specialList" v-bind:key="special.id">
		<div class="image" v-bind:style="{'background-image':'url('+special.imageUrl+')'}"></div>
		<div class="special-title">{{special.title}}</div>
		<div class="special-user">{{special.followers}} 关注·{{special.articlesCount}}文章</div>
		<div class="special-content">{{special.description}}</div>
		<div class="special-button">进入专栏</div>
	</div>
	</div>
		
		<div class="news-more" @click="morespecial()">
			<span>查看更多专栏 ></span>
		</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				specialList:[]
			}
		},
		methods:{
			loadData(){
				this.$http.get("http://localhost:9091/api/columns/top")
				.then((result) => {
					console.log("special on loadData",result)
					this.specialList = result.data.data
					console.log("special",this.specialList)
				})
				.catch(() => {})
				.finally(() => {})
			},
			morespecial(){
				this.$router.push("allspecial");
			}
		},
		mounted:function(){
			console.log("special on vue")
			this.loadData();
		}
	}
</script>

<style scoped>
	.news-root{
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.news-center{
		width: 1032px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.news-center .news-title{
		width: 180px;
		height: 60px;
		margin-top: 40px;
	}
	.news-center .news-title span{
		font-size: 24px;
		color: #000000;
		font-weight: 900;
	}
	.news-center .news-title svg{
		color: #0084FF;
	}
	.body1{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 1032px;
	}
	.special-body{
		width: 230px;
		margin-right: 20px;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.special-body .image{
		margin-top: 30px;
		width: 90px;
		height: 90px;
		background: url(../assets/images.jpg);
		background-size:cover ;
		background-position: center;
		border-radius: 50%;
	}
	.special-body .special-title{
		margin-top: 20px;
		font-weight: 800;
		font-size: 17px;
		color: #000000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 130px;
	}
	.special-body .special-user{
		font-size: 12px;
		margin-top: 5px;
		color: #999999;
	}
	.special-body .special-content{
		height: 40px;
		width: 200px;
		margin-top: 20px;
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.special-body .special-button{
		width: 100px;
		background: #EBF5FF;
		color: #0084FF;
		font-weight: 600;
		line-height: 30px;
		border-radius: 5px;
		margin-bottom: 30px;
		margin-top: 20px;
	}
	.news-center .news-more{
		margin: 50px auto;
		width: 150px;
		font-weight: 900;
		line-height: 40px;
		background: #FFFFFF;
		border-radius: 20px;
		color: #8590A6;
		cursor: pointer;
	}
</style>
