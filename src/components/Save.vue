<template>
	<div class="news-root">
		<div class="news-center">
		<div class="news-title">
			<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
			<span>热门收藏夹</span>
			</div>

  <div class="body1">
		<div class="save-body" v-for="save in saveList" v-bind:key="save.id">
			<div class="save-up">
				<div class="first">
				<div class="save-title">{{save.title}}</div>
				<div class="save-button">关注收藏夹</div>
				</div>
				<div class="second">
					<div class="image" v-bind:style="{'background-image':'url('+save.creatorAvatar+')'}"></div>
					<div class="second-name">{{save.creatorName}}创建 | {{save.followers}}人关注</div>
				</div>
			</div>
			<div class="save-down">
				<div class="down-name">
				<div class="down-title">{{save.questionTitle}}</div>
				<div class="down-content">{{save.answerAuthorName}}：{{save.answerContent}}</div>
				<div class="down-three"><span>回答</span>{{save.totalCount}}赞同·{{save.voteupCount}}评论</div>
				</div>
				<div class="down-name">
				<div class="down-title">苻坚为何要远征西域？</div>
				<div class="down-content">关毛：因为之前的西普和前凉，都在jinglve西域。汉朝没有的衰亡没有...</div>
				<div class="down-three"><span>回答</span>209赞同·42评论</div>
				</div>
				<div class="down-last">已收藏{{save.commentCount}}条内容 ></div>
			</div>
		</div>
		</div>
		
		<div class="news-more">
			<span>查看更多收藏夹 ></span>
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
				this.$http.get("http://localhost:9091/api/zhihu/t-favorites-four")
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
			console.log("save on loadData")
			this.loadData();
		}
	}
</script>

<style>
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
	
	.save-body{
		width: 495px;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		border-radius: 10px;
		margin-bottom: 20px;
	}
	.save-up{
		display: flex;
		flex-direction: column;
		margin: 30px 20px 0px 20px ;
	} 
	.save-up .first{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.first .save-title{
		font-size: 20px;
		font-weight: 800;
		color: #000000;
		width: 300px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
	}
	.first .save-button{
		width: 110px;
		background: #EBF5FF;
		color: #0084FF;
		font-weight: 600;
		line-height: 30px;
		border-radius: 10px;
	}
	.second{
		display: flex;
		flex-direction: row;
		margin: 10px 20px 20px 20px;
		align-items: center;
	}
	.second .image{
		width: 40px;
		height: 40px;
		background: url(../assets/images.jpg);
		background-size:cover ;
		background-position: center;
	}
	.second .second-name{
		margin-left: 10px;
		color:#999999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 15px;
	}
	.save-down{
		display: flex;
		flex-direction: column;
		border-top: 1px solid #EBEBEB;
		margin: 0px 20px 30px 20px ;
	}
	.down-name{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.down-name .down-title{
		text-align: left;
		color: #000000;
		font-weight: 800;
		font-size: 15px;
		margin-top: 20px;
	}
	.down-name .down-content{
		margin: 5px 0px 5px 0px;
		width: 450px;
		text-align: left;
		color: #000000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.down-name .down-three{
		text-align: left;
		color: #8590A6;
		font-size: 15px;
	}
	.down-name .down-three span{
		text-align: left;
		background: #f5f5f5;
		margin-right: 5px;
		color: #8590A6;
		padding: 3px 5px;
		}	
	.save-down .down-last{
		text-align: left;
		margin-top: 10px;
		color: #8590A6;
		font-weight: 900;
	}
	
	
	
	
	.news-center .news-more{
		margin: 50px auto;
		width: 150px;
		font-weight: 900;
		line-height: 40px;
		background: #FFFFFF;
		border-radius: 20px;
		color: #8590A6;
	}
</style>
