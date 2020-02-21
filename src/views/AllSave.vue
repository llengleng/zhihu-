<template>
	<div class="all-news">
		<div class="top-center">
	<div class="top-title">
		<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
		<div class="top-title-big">热门收藏夹</div>
	</div>
	</div>

<div class="body">
<div class="body1" v-for="allsave in saveList" v-bind:key="allsave.id">
<div class="save-body" >
	<div class="left">
	<div class="save-left">
		<div class="left-title">{{allsave.title}}</div>
		<div class="left-content">
			<div class="image" v-bind:style="{'background-image':'url('+allsave.creatorAvatar+')'}"></div>
			<div class="name">{{allsave.creatorName}}<span>创建</span></div>
		</div>
		<div class="left-last">
			<div class="save-button">关注收藏夹</div>
			<div class="save-user">{{allsave.followers}}人关注</div>
		</div>
	</div>
	</div>
	<div class="right">
	<div class="save-right">
		<div class="right-title">{{allsave.questionTitle}}</div>
		<div class="right-content">{{allsave.answerContent}}</div>
		<div class="right-user"><span>回答</span>{{allsave.totalCount}} 赞同 · {{allsave.voteupCount}}评论</div>
		<div class="right-last">已收藏 {{allsave.commentCount}}条内容 ></div>
	</div>
	</div>
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
				saveList:[]
			}
		},
		methods:{
			loadData(){
				this.$http.get("http://localhost:9091/api/zhihu/t-favorites")
				.then((result) => {
					console.log("save loadData",result)
					this.saveList = result.data
					console.log("save",this.saveList)
				})
				.catch(() => {})
				.finally(() => {})
			}
		},
		mounted:function(){
			this.loadData();
		}
	}
</script>

<style scoped>
	.all-news{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.top-center{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background: #FFFFFF;
	}
	.top-title{
		width: 1032px;
		height: 90px;
		display: flex;
		align-items: center;
		flex-direction: row;
	}
	.top-title svg{
		color: #0084FF;
		margin-right: 10px;
	}
	.top-title .top-title-big{
		font-size: 25px;
		color: #000000;
		font-weight: 900;
	}
	.body{
		display: flex;
		flex-direction: column;
	}
	.body1{
		display: flex;
		flex-direction: column;
		width: 1032px;
		background: #FFFFFF;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.save-body{
		display: flex;
		flex-direction: row;
		margin: 20px 30px;	
	}
	.left{
		border-right:1px solid #DCDCDC ;
	}
	.save-left{
		width: 300px;
		height: 130px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-right: 50px;
	}
	.save-left .left-title{
		font-weight: 800;
		font-size: 15px;
		color: #000000;
	}
	.left-content{
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.left-content .image{
		width: 30px;
		height: 30px;
		background-position: center;
		background: url(../assets/images.jpg);
		background-size:cover ;
		margin-right: 5px;
		border-radius: 3px;
	}
	.left-content .name span{
		font-size: 13px;
		color: #999999;
	}
	.left-last{
		margin-top: 30px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.left-last .save-button{
		background: #EBF5FF;
		color: #0084FF;
		font-weight: 600;
		line-height: 20px;
		border-radius: 5px;
		padding:5px 10px;
	}
	.left-last  .save-user{
		color: #999999;
		margin-left: 20px;
	}
	.right{
		display: flex;
		flex-direction: column;
	}
	.save-right{
		width: 500px;
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}
	.save-right .right-title{
		color: #000000;
		font-weight: 800;
		font-size: 15px;
		width: 600px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.save-right .right-content{
		text-align: left;
		margin: 10px 0px;
		height: 40px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.save-right .right-user{
		color: #999999;
		font-size: 13px;
	}
	.save-right .right-user span{
		background: #F6F6F6;
		border-radius: 3px;
		padding: 3px 5px;
		font-size: 13px;
		color: #999999;
		margin-right: 5px;
	}
	.save-right .right-last{
		font-weight: 500;
		color: #999999;
		margin-top: 10px;
	}
	
	
</style>
