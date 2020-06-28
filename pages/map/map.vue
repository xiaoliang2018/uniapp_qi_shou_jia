
<template>
	<view>
		<view class="page-body">
		    <view class="page-section page-section-gap">
		        <map style="width: 100%; height: 1200upx;" :controls="controls" 
						:circles="circles"
						:polyline='polyline' :scale="scale" :latitude="latitude" :longitude="longitude" :markers="covers"
						@markertap="markertap"
						@callouttap="callouttap" 
				 >
		        </map>
		    </view>
		</view>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [
					{
						id:1,
				    latitude: 39.90,//纬度
				    longitude: 116.39,//经度
				    iconPath: '../../static/images/reduce_icon.png',	//显示的图标			
						title:'标注点名',//标注点名
	// 				label:{//为标记点旁边增加标签
	// 			            content:'文本221',//文本
	// 			            color:'#F76350',//文本颜色
	// 						anchorX:0,//label的坐标，原点是 marker 对应的经纬度
	// 						anchorY:-80,//label的坐标，原点是 marker 对应的经纬度 
	// // 					    x:39.909,//这个组件微信在1.2.0以后就废弃了
	// // 					    y:116.39742,
	// 						bgColor:'#fff',//背景色
	// 						padding:5,//文本边缘留白
	// 						borderWidth:1,//边框宽度
	// 						borderRadius:10,
	// 						borderColor:'#D84C29',//边框颜色							
	// 						textAlign:'right'//文本对齐方式。
	// 				 },
					 callout:{//自定义标记点上方的气泡窗口 点击有效
							content:'地点1',
							color:'#F76350',
							fontSize:12,
							borderRadius:5,
					 },
// 					 anchor:{//经纬度在标注图标的锚点，默认底边中点
// 						 x:5,
// 						 y:1,
// 					  }
					}
					// , {
				   
					// latitude: 39.90,
				 //    longitude: 116.39,
				 //    iconPath: '../../static/images/add_icon.png',
					// title:'阿迪达斯',
					// x:39.90,
					// y:116.399,
					// label:{
					//         content:'文本2',
					//         color:'#F76350',
					//         bgColor:'#fff',
					//         padding:5,
					//         borderRadius:4,
					//  },
					//  callout:{
					//         content:'地点2',
					//         color:'#F76350',
					//         fontSize:12
					//  }
				// }
				],
				scale:15,//地图层级
				controls:[{//在地图上显示控件，控件不随着地图移动
					id:1,//控件id
					iconPath:'../../static/images/close_icon.png',//显示的图标	
					position:{//控件在地图的位置
						left:15,
						top:15,
						width:50,
						height:50
					},	
				}],
				circles:[{//在地图上显示圆
					latitude: 39.90,
					longitude: 116.39,
					fillColor:"#FFC41F",//填充颜色
					color:"#12A1DD",//描边的颜色
					radius:500,//半径
					strokeWidth:2//描边的宽度
				}],
				polyline:[{//指定一系列坐标点，从数组第一项连线至最后一项
					points:[
						{latitude: 39.909,longitude: 116.39742},
						{latitude: 39.90,longitude: 116.39},
					],
					color:"#0000AA",//线的颜色
					width:2,//线的宽度
					dottedLine:true,//是否虚线
					arrowLine:true,	//带箭头的线 开发者工具暂不支持该属性
				}],
			};
		},
		onLoad(){
			uni.getLocation({//获取当前的位置坐标
				type: 'wgs84',
				success: function (res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				}
			});  
// 			uni.chooseLocation({
// 				success: function (res) {
// 					console.log('位置名称：' + res.name);
// 					console.log('详细地址：' + res.address);
// 					console.log('纬度：' + res.latitude);
// 					console.log('经度：' + res.longitude);
// 				}
// 			});
		},
		methods:{
			markertap(evt){
				console.log('标记点',evt)
			},
			callouttap(evt){
				console.log('标记点上面小气泡',evt)
			}
		}
	}
</script>

<style lang="scss">
	
</style>
