<template>
		<view>
			
			<view style="height:500upx;width:100%">
				<mpvue-echarts v-if="!showLeft" class="ec-canvas" @onInit="lineInit1" canvasId="line1" ref="lineChart" />
			</view>
			
				<uni-drawer :visible="showLeft" @close="closeDrawer('left')">
						<view style="padding:30upx;">
								<view class="uni-title">抽屉式导航</view>
						</view>
					<view class="close">
						<button type="default" @click="hide">关闭Drawer</button>
					</view>
				</uni-drawer>
			
			<button type="default" @click="show('left')">显示Drawer11</button>
			
			
			<!-- 一般用法 -->
			<uni-grid :column="3">
				<uni-grid-item>
					<text class="text">{{mapData}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{mapData.longitude}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{mapData.latitude}}</text>
				</uni-grid-item>
			</uni-grid>
	
			<button @click="open">打开弹窗</button>
				<uni-popup ref="popup" type="bottom" style="z-index: 9999;">
					<scroll-view style="background:#fff;height:100vh">
						
						 <!-- <map id="navmap" :style="'width: 100%;height:100vh;'">  </map> -->
						<!-- <cover-view>	 -->
							<button type="default" @click="close">页面主操作 Normal</button>
						<!-- </cover-view> -->
					</scroll-view>
				</uni-popup>
			
       
		<!-- 	<uni-drawer :visible="showLeft" mode="left" @close="closeDrawer('left')">
				
				
				<view class="">
					111111
				</view>
		
				<view class="close">
					<button type="default" @click="hide">关闭Drawer</button>
				</view>
			</uni-drawer> -->
		</view>
</template>
<script>
	// import echarts from '@/echartsComponents/echarts/echarts.min.js';
	import echarts from '@/echartsComponents/echarts/echarts.min.dingzhi_simple.js';
	import mpvueEcharts from '@/echartsComponents/mpvue-echarts/src/echarts.vue';
	
	
	// import echarts from '@/echartsComponents/echarts/echarts.simple.min.js';
	// import uniIcon from '@/components/uni-icon/uni-icon.vue'
	// import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	// import uniList from '@/components/uni-list/uni-list.vue'
	// import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				left:100,
				mapData:{longitude:0,latitude:0},
				showRigth: false,
				showLeft: false
			}
		},
		components: {
			mpvueEcharts

		},
		onLoad(options) {
			// uni.redirectTo({
			// 		url: '/pages/map/map',
			// 		success: res => {},
			// 		fail: () => {},
			// 		complete: () => {}
			// });
			
			
			
			
			
			
			let _this = this;
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					//116.725922
					//23.390704
					// this.mapData = res;
					// _this.mapData = {longitude:res.longitude,latitude:res.latitude}
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				},
				fail(err){
					console.log('获取失败',err)
				}
			});
			
			uni.createMapContext("navmap",this);  
			
			
			// #ifdef MP-WEIXIN
				// 仅作为示例，非真实参数信息。 微信小程序支付
				// uni.requestPayment({
				// 	provider: 'wxpay',  //提供服务商
				// 	timeStamp: String(Date.now()), //时间戳
				// 	nonceStr: 'A1B2C3D4E5',  //随机字符串
				// 	package: 'prepay_id=wx20180101abcdefg',  //统一下单接口返回的 prepay_id 参数值
				// 	signType: 'MD5',  //签名算法
				// 	paySign: '',  //签名
				// 	success: function (res) { //成功回调
				// 		console.log('success:' + JSON.stringify(res));
				// 	},
				// 	fail: function (err) {//失败回调
				// 		console.log('fail:' + JSON.stringify(err));
				// 	}
				// });
				// uni.showShareMenu({
				// 	withShareTicket:true,
				// })
				
				// onShareAppMessage({
				// 	title:'标题',
				// 	// path:this.share.path,
				// 	// imageUrl:this.share.imageUrl,
				// 	desc:'内容1',
				// 	content:'内容2',
				// 	success(res){
				// 	    uni.showToast({
				// 	        title:'分享成功'
				// 	    })
				// 	},
				// 	fail(res){
				// 	    uni.showToast({
				// 	        title:'分享失败',
				// 	        icon:'none'
				// 	    })
				// 	}	
				// })
				
			//#endif
		
			

			
			// setInterval(()=>{
			// 	this.left -= 0.5;
			// 	if(this.left < -20){
			// 		this.left = 100;
			// 	}
			// },10)

			// '192.168.88.104:1000/test/get'
			// https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=13531196480
			// console.log(options)
			// uni.request({
			//     url: '/test/get', //仅为示例，并非真实接口地址。
			// 	method:"GET",
			//     // header: {
			//     //     'custom-header': 'hello' //自定义请求头信息
			//     // },
			//     success: (res) => {
			//         console.log(res.data);
			//         // this.text = 'request success';
			//     }
			// });
		},
		methods: {
			onShareAppMessage( options ){
			　　var that = this;
			　　// 设置菜单中的转发按钮触发转发事件时的转发内容
			　　var shareObj = {
			　　　　title: "转发的标1111题",        // 默认是小程序的名称(可以写slogan等)
			　　　　path: '/pages/index/index',        // 默认是当前页面，必须是以‘/’开头的完整路径
			　　　　imageUrl: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
			　　　　success(res){
			　　　　　　// 转发成功之后的回调
										console.log('转发成功');
			　　　　　　if(res.errMsg == 'shareAppMessage:ok'){
										console.log('转发成功');
			　　　　　　}
			　　　　},
			　　　　fail(){
			　　　　　　// 转发失败之后的回调
			　　　　　　if(res.errMsg == 'shareAppMessage:fail cancel'){
			　　　　　　　　// 用户取消转发
										console.log('用户取消转发');
			　　　　　　}else if(res.errMsg == 'shareAppMessage:fail'){
			　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
										console.log('转发失败');
			　　　　　　}
			　　　　},
			　　　complete(){
							console.log('转发结束之后的回调')
			// 　　　　
			　// （转发成不成功都会执行）
			　　　　}
			　　};
			　　// 来自页面内的按钮的转发
			// 　　if( options.from == 'button' ){
			// 　　　　var eData = options.target.dataset;
			// 　　　　console.log( eData.name );     // shareBtn
			// 　　　　// 此处可以修改 shareObj 中的内容
			// 　　　　shareObj.path = '/pages/btnname/btnname?btn_name='+eData.name;
			// 　　}
			　　// 返回shareObj
			　　return shareObj;
			},
			lineOption(obj){
				let lineOption = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						},
						// position:["50%","50%"],
						// formatter:function(){
						// 	return '<view style="color:red">11111</view>'
						// }
					},
					dataZoom:[
					{
						start: 30,  //数据窗口范围的起始百分比,表示30%
						  end: 70
					}
					],
					legend: {
						data: ['2011年', '2012年']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01]
					},
					yAxis: {
						type: 'category',
						data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
					},
					series: [
						{
							name: '2011年',
							type: 'bar',
							data: obj.data1
						},
						{
							name: '2012年',
							type: 'bar',
							data: obj.data2
						}
					]
				};
				return lineOption;
			},
			lineInit1(e) {
				this.echWHData1 = e;
				let obj = {
					data1:[66, 55, 44, 33, 22, 11],
					data2:[11, 22, 33, 44, 55, 66]
				}
				this.echartsInit1(obj);  //加载echarts
			},
			echartsInit1(obj){
				let canvas = this.$refs.lineChart.canvas;
				echarts.setCanvasCreator(() => canvas);
				let lineChart = echarts.init(canvas, null, {
					width: this.echWHData1.width,
					height: this.echWHData1.height
				});
				canvas.setChart(lineChart);
				lineChart.setOption(this.lineOption(obj));
				this.$refs.lineChart.setChart(lineChart);
			},
			open(){
				// console.log(this.$refs.popup)
				this.$refs.popup.open()
			},
			close(){
				this.$refs.popup.close();
			},
			show(e) {
				if (e === 'left') {
					this.showLeft = true
				} else {
					this.showRigth = true
				}
			},
			hide() {
				this.showLeft = false
				this.showRigth = false
			},
			closeDrawer(e) {
				if (e === 'left') {
					this.showLeft = false
				} else {
					this.showRigth = false
				}
			}
		},
		// onNavigationBarButtonTap(e) {
		// 	this.showRigth = !this.showRigth
		// },
		// onBackPress() {
		// 	if (this.showRigth || this.showLeft) {
		// 		this.hide()
		// 		return true
		// 	}
		// }
	}
</script>

<style lang="less">
	.scroll{
		position: absolute;
		top: 0;
		/* left:80%; */
		background:red;
		z-index: 999;
	/* 	div{
			background-color: red;
		} */
	}
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.header {
		display: flex;
		flex-direction: row;
		padding: 10px 15px;
		align-items: center;
	}

	.input-view {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		flex: 1;
	}

	.uni-padding-wrap {
		padding: 0 15px;
		line-height: 1.8;
	}

	.input {
		flex: 1;
		padding: 0 5px;
		height: 24px;
		line-height: 24px;
		font-size: 16px;
	}

	.input-view .input {
		background-color: transparent;
	}

	.close {
		padding: 30upx;
	}
</style>


