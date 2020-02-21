<template>
 <div class="page-root">
	 <div class="page-head">
		 <div class="head-center">
			 <div class="head-title zhihu"></div>
			 <div class="page-title">
				 <div class="title-name" :class="{'active':nav=='首页'}" @click="navClick('首页','/')">首页</div>
				 <div class="title-name" :class="{'active':nav=='发现'}" @click="navClick('发现','/find')">发现</div>
				 <div class="title-name" :class="{'active':nav=='等你来答'}" @click="navClick('等你来答','/answer')">等你来答</div>
			 </div>
			 <div class="search" :class="{'wide':searchFocus==true,'short':!searchFocus}">
				 <input class="search-input" :class="{'wide':searchFocus==true}"
				 type="text" 
				 placeholder="中医药在疫情中起哪些作用"
				 @focus="onFocusIn(true)"
				 @blur="onFocusIn(false)"
				 ></input>
				 <div class="search-button"></div>
			 </div>
			 <div class="question" :class="{'wide':searchFocus==true}"><span>提问</span></div>
			 
			 <div class="last-button">
				 <div class="button1"><svg class="Zi Zi--Bell" fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z"></path></svg>
				 <div class="point1"><span>1</span></div>
				 </div>
				 
				 <div class="button1"><svg class="Zi Zi--Comments" fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z" fill-rule="evenodd"></path></svg>
				 <div class="point2"><span>99+</span></div>
				 </div>
				
				 <div class="button2"></div>
			 </div>
		 </div>
	 </div>
	 
 </div>
</template>

<style scoped>
	.page-root{
		min-width:1080px;
	}
	.page-head{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 52px;
		background: #fff;
		align-items: center;
		box-shadow: rgba(240,240,240) 0px 2px 0px;
	}
	.head-center{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 1032px;
	}
	.head-center .head-title.zhihu{
		align-items: center;
		height: 40px;
		width: 80px;
		background: url(../assets/tltle.png);
		background-size: cover;
	}
	.page-title{
		width: 200px;
		height: 52px;
		display: flex;
		flex-direction: row;
	}
  .page-title .title-name{
		line-height: 52px;
		margin-left: 20px;
		flex-wrap: nowrap;
		align-items: flex-start;	
	 }
	 .page-title .title-name:hover{
	 			color: black;
				cursor: pointer;
	 }
	 .page-title .title-name.active{
		 	border-bottom: 3px solid #0084FF;
			color: black;
			font-weight: 600;
	 }
	 .search{
		 width: 240px;
		 height:auto;
		 display:flex;
		 margin-left:30px;
		 flex-direction: row;
		 align-items: center;
		 position: relative;
		 background-color:#f5f5f5;
		 border:1px solid rgba(240,240,240,0.9);
	 }
	 .search .search-input{
		 width:220px;
		 padding:6px;
		 padding-right:16px;
		 border-radius: 3px;
		 text-indent: 10px;
		 border:none;
		 background-color:#f5f5f5;
	 }
	 
	 
	 .search .search-button{
		 width: 16px;
		 height: 16px;
		 position:absolute;
		 right:8px;
		 top:6px;
		 background: url(../assets/search.png);
		 background-size:cover;
		 display: flex;
	 }
	 
	 .question{
		 width: 50px;
		 height: 30px;
		 background: #0084FF;
		 margin-left: 10px;
		 border-radius: 3px;
		 display: flex;
		 flex-direction: column;
		 align-items: center;
	 }
	 
	 @keyframes dosearchwide{
	 	from{width:260px}
	 	to{width:300px}
	 }
	 
	 @keyframes dosearchshort{
	 	from{
			width:300px;
		}
	 	to{width:260px}
	 }
	 .search.short{
	 		 animation:dosearchshort 500ms forwards;
	 }
	 .search.wide{
	 		 animation:dosearchwide 500ms forwards;
	 		 border:1px solid rgba(99,99,99,0.6);
	 }
	 .search .search-input.wide{
	 		 width:280px;
	 		 outline: none;
	 }
	 .question.wide{
	 		 display:none;
	 }
	 .question span{
		 line-height: 30px;
		 color: #fff;
		 font-size: 12px;
	 }
	 .last-button{
		 width: 287px;
		 display: flex;
		 flex-direction: row;
		 margin-left: 90px;
		  align-items: centr;
			justify-content: flex-end;
			flex:1;
	 }
	 .last-button .button1{
		 position: relative;
		 color: #8590A6;
		 margin-right: 30px;
		 
	 }
	 .last-button .button2{
		 width: 28px;
		 height: 28px;
		 background: url(../assets/images.jpg);
		 background-size:cover;
		 border-radius: 3px;
	 }
	 .button1 .point1{
		 position: absolute;
		 width: 15px;
		 height: 15px;
		 background-color: #F1403C;
		 border-radius: 50%;
		 top: -6px;
		 right: -3px;
		 box-shadow: rgba(255,255,255) -1px 1px 0px;
		 font-size: 60%;
		 text-align: center;
	 }
	 .button1 .point2{
	 		 width: 25px;
	 		 height: 16px;
	 		 background-color: #F1403C;
	 		 border-radius: 8px;
			 position: absolute;	 
			 top: -6px;
			 right: -15px;
			 box-shadow: rgba(255,255,255) -1px 1px 0px;
			 font-size: 60%;
			 text-align: center;
	 }
	 .point1 span{
		 color: #fff;
		 line-height:16px;
	 }
	 .point2 span{
	 		 color: #fff;
			 line-height:16px;
	 }
	
	
	
</style>

<script>
export default {
  name: 'Home',
  components: {

  },
	data(){
		return {
			nav:'',
			searchFocus:false //定义变量接收搜索框光标进入状态，默认false，即没进入。
		}
	},
	methods:{
		navClick(navName,url){
			this.nav=navName;
			this.$router.push(url);
		},
		//当光标进入输入框，传递true进入此方法，当光标离开输入框，传递false进入此方法。
		onFocusIn(isFocus){
			this.searchFocus=isFocus;
		}
	}
}
</script>
