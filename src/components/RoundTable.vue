<template>
	<div class="news-root">
		<div class="news-center">
		<div class="news-title">
			<svg class="Zi Zi--LabelRoundtable" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z" fill-rule="evenodd"></path></svg>
			<span>圆桌讨论</span>
			</div>
	
	
		<div class="body1">			
		<div class="table-body" v-for="roundtable in roundtableList" v-bind:key="roundtable.id">
			<div class="table-up">
				<div class="bacground right">
					<div class="image" v-bind:style="{'background-image':'url('+roundtable.banner+')'}"></div>
					<div class="bg"></div>
				</div>
				<div class="bacground left">
				<div class="table-title">{{roundtable.name}}</div>
				<div class="table-content">当新冠肺炎确诊病例数不断攀升，
				病毒也在世界版图上持续蔓延。目前各国疫情形势如何？都
				采取了哪些措施？本期圆桌带你追踪病毒的轨迹。采取了哪些措施？本期圆桌带你追踪病毒的轨迹。</div>
				<div class="table-user">
					<div class="user-left">
						<div class="user-image"></div>
						<div class="user-content">{{roundtable.visitsCount}}位嘉宾参与 | {{roundtable.includeCount}}人关注</div>
					</div>
					<div class="table-button">关注圆桌</div>
				</div>
				</div>
			</div>
			<div class="table-down">
				<div class="down1">
				<div class="down-title-big">美国首例新冠病毒患者使用未获批准药瑞德西韦后...</div>
				<div class="down-title-small">859个回答</div>
				</div>
				<div class="down1">
				<div class="down-title-big">美国首例新冠病毒患者使用未获批准药瑞德西韦后...</div>
				<div class="down-title-small">859个回答</div>
				</div>
				<div class="down1">
				<div class="down-title-big">美国首例新冠病毒患者使用未获批准药瑞德西韦后...</div>
				<div class="down-title-small">859个回答</div>
				</div>
			</div>
		</div>
		</div>
		
		<div class="news-more" @click="roundtableOnclick()">
			<span>查看更多圆桌 ></span>
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
				this.$http.get("http://localhost:9091/api/roundtable")
				.then((result) => {
					console.log("roundtable on vue");
					this.roundtableList=result.data.data;
					console.log("roundtable",this.roundtableList)
				})
				.catch(() => {})
				.finally(() => {});
			},
			roundtableOnclick(){
				this.$router.push("alltable");
			}
		},
		mounted:function(){
			console.log("roundtable on load")
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
	}
	.table-body{
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 10px;
	}
	.table-body .table-up{
		width: 495px;
		height: 230px;
		background: rgba(179,89,113);
		position: relative;
		border-radius:10px 10px 0px 0px;
	}
	.table-body .table-up .bacground.right .image{
		border-radius:0px 10px 10px 0px;
		z-index: 1;
		width: 250px;
		height: 230px;
		position: absolute;
		background-image: url(../assets/table.png);
		background-position: center;
		background-size:cover ;
		right: 0;
	}
	.table-body .table-up .bacground.right .bg{
		border-radius:0px 10px 10px 0px;
		position: absolute;
		background: linear-gradient(to right,rgba(179,89,113,1),rgba(197,89,113,0.5));
		z-index: 2;
		width: 250px;
		height: 230px;
		right: 0;
	}
	.table-body .table-up .bacground.left{
		z-index: 3;
		position: absolute;
		left: 0;
		display: flex;
		flex-direction: column;
		margin-top: 60px;
		margin-left: 30px;
		text-align:left;
	}
	.table-body .table-up .bacground.left .table-title{
		color: #FFFFFF;
		font-weight: 600;
		font-size: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 250px;
	}
	.table-body .table-up .bacground.left .table-content{
		color: #FFFFFF;
		font-size: 14px;
		width: 330px;
		margin-top: 20px;
		height: 54px;
		overflow: hidden;
		text-overflow: ellipsis;
		flex-wrap: wrap;
	}
	.table-user{
		margin-top: 20px;
		align-items: center;
		display: flex;
		flex-direction: row;
	}
	.user-left{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.table-user .user-left .user-image{
		width: 40px;
		height: 40px;
		background-position: center;
		background: url(../assets/images.jpg);
		background-size:cover ;
		margin-right: 10px;
	}
	.table-user .user-left .user-content{
		width: 200px;
		color:#CB8E9F;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.table-user .table-button{
		width: 100px;
		line-height: 30px;
		background: #FFFFFF;
		border-radius: 10px;
		margin-left: 50px;
		color: #B35971;
		text-align: center;
	}
	.table-down{
		align-items: flex-start;
		display: flex;
		flex-direction: column;	
		margin-bottom: 20px;
	}
	.table-down .down1{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 30px;
		margin-top: 20px;
	}
	.table-down .down1 .down-title-big{
		margin-bottom: 10px;
	}
	.table-down .down1 .down-title-small{
		color: #99A6C4;
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
		cursor: pointer;
	}
</style>
