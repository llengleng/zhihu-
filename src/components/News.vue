<template>
	<div class="news-root">
		<div class="news-center">
		<div class="news-title">
			<svg class="Zi Zi--LabelSpecial" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z" fill-rule="evenodd"></path></svg>
			<span>最新专题</span>
			</div>
			
		<div class="body1">	
		<div class="news-body" v-for="news in newsList" v-bind:key="news.id">
			<div class="news-image" v-bind:style="{'background-image':'url('+news.banner+')'}"></div>
			<div class="news-body-title">
				<div class="news-titles">
					<div class="big-title">{{news.title}}</div>
					<div class="small-title">{{news.updated}}更新·{{news.viewCount}}浏览</div>
				</div>
				<div class="news-button">关注专题</div >
			</div>
			<div class="news-says">
				<div class="news-says-content">
					<span class="content-left">{{news.sections[0].sectionTitle}}</span>
					<span class="content-right">积压100多万斤人参果，我们要在线上卖...</span>
				</div>
				<div class="news-says-content">
					<span class="content-left">{{news.sections[1].sectionTitle}}</span>
					<span class="content-right">积压100多万斤人参果，我们要在线上卖...</span>
				</div>
				<div class="news-says-content">
					<span class="content-left">{{news.sections[2].sectionTitle}}</span>
					<span class="content-right">积压100多万斤人参果，我们要在线上卖...</span>
				</div>
			</div>
		</div>
		</div>
		
		<div class="news-more">
			<span>查看更多专题 ></span>
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
				 this.$http.get("http://localhost:9091/api/special")
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
			console.log("News on load!")
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
		display: flex;
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
		width: 1032px;
		justify-content: space-around;
	}
	.news-body{
		background: #FFFFFF;
		border-radius: 10px;
		margin-bottom: 20px;
		
	}
	.news-body .news-image{
		width:495px;
		height:200px;
		background: url(../assets/image.png);
		background-position: center;
		background-size:cover ;
		border-radius: 10px 10px 0px 0px;
	}
	.news-body-title{
		display: flex;
		flex-direction: row;
		
	}
	.news-titles{
		margin: 30px 25px;
		display: flex;
		flex-direction: column;
	}
	.news-titles .big-title{
		color: #000000;
		font-size: 20px;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    width: 300px;
		text-align: left;
	}
	.news-titles .small-title{
		display: flex;
		margin-top: 8px;
		font-size: 12px;
	}
	.news-body-title .news-button{
		margin: 35px 15px 35px 10px;
		width: 110px;
		background: #EBF5FF;
		color: #0084FF;
		font-weight: 600;
		line-height: 40px;
		border-radius: 10px;
	}
	.news-says{
		width: 450px;
		border-top:1px solid gainsboro ;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 15px 0px;
		
	}
	.news-says .news-says-content{
		margin: 8px  0px;
		font-size: 13px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.news-says .news-says-content .content-left{
		background: #F6F6F6;
		width: 140px;
		line-height: 20px;
		color: #859DC2;
		border-radius: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.news-says .news-says-content .content-right{
		margin-left: 10px;
		color: #000000;
		font-size: 15px;
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
