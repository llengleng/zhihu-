<template>
	<div class="all-news">
		<div class="top-center">
	<div class="top-title">
		<svg class="Zi Zi--LabelSpecial" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z" fill-rule="evenodd"></path></svg>
		<div class="top-title-big">全部专题<span>共有543个专题</span></div>
	</div>
	</div>
	<div class="body1">
	<div class="news-body1" v-for="allnews in newsList" v-bind:key="allnews.id">
		<div class="body-all">
		<div class="news-image" v-bind:style="{'background-image':'url('+allnews.banner+')'}"></div>
		<div class="news-right">
			<div class="title-first">
				<div class="title">{{allnews.title}}</div>
				<div class="news-button">关注专题</div>
			</div>
			<div class="news-user">{{allnews.updated}}更新·{{allnews.viewCount}}次浏览</div>
			<div class="news-content">{{allnews.introduction}}
			</div>
			<div class="last">

					<div class="tagitem" v-for="item in allnews.sections" v-bind:key="item.id">
					{{item.sectionTitle}}</div>
					
				
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
				newsList:[]
			}
		},
		methods:{
			loadData(){
					 this.$http.get("http://localhost:9091/api/special/all")
				.then((result) => {
									 console.log("News.vue loadData",result)
									 this.newsList=result.data.data;
									 console.log("News.vue news",this.newsList)
				})
				.catch(() => {})
				.finally(() => {});
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
	.top-title .top-title-big span{
		font-size: 15px;
		color: #999999;
		margin-left: 20px;
		font-weight: 400;
	}
	.body1{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.news-body1{
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #FFFFFF;
		width: 1032px;
		height: 188px;
		border-radius: 5px;
		margin-top: 20px ;
		align-items: flex-start;
		align-content: flex-start;
		text-align: left;
	}
	.body-all{
		width: 1000px;
		height: 140px;
		display: flex;
		flex-direction: row;
		margin: 25px;
	}
	.body-all .news-image{
		width: 330px;
		height: 140px;
		background: url(../assets/image.png);
		background-size:cover ;
		background-position: center;
		border-radius: 5px;
		margin-right: 20px;
	}
	.body-all .news-right{
		height: 150px;
		display: flex;
		flex-direction: column;
		padding-right:10px;
		flex: 1;
	}
	.title-first{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		align-items:center;
	}
	.title-first .title{
		width: 480px;
		font-size: 18px;
		font-weight: 800;
		color: #000000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.title-first .news-button{
		background: #EBF5FF;
		color: #0084FF;
		font-weight: 600;
		line-height: 20px;
		border-radius: 5px;
		padding:5px 10px;
	}
	.news-right .news-user{
		color: #999999;
		font-size: 12px;
		margin: 10px 0px;
	}
	.news-right .news-content{
		overflow: hidden;
		height: 40px;
		text-overflow: ellipsis;
	}
	.news-right .last{
		display:flex;
		flex-direction: row;
	}
	.news-right .last .tagitem{
		margin-right:10px;
		background-color:#f5f5f5;
		padding:5px 8px;
		text-align:center;
		font-size:12px;
		color:#8994a5;
		margin-top:10px;
		border-radius: 5px;
		
	}
	
	
</style>
