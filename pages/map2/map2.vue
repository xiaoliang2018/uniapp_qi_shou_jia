<template>
	<div>
		<button type="default"  @click="openMap()">地图导航</button>
		<!-- <map style="width: 100%; height: 889rpx;" :latitude="latitude" :longitude="longitude" :markers="covers" @tap="openMap()"></map> -->
	</div>
</template>

<script>
	export default{
		//相关配置参数
		data() {
			return {
				current: 0,
				latitude: 31.7335,
				longitude: 118.1024,
				covers: [
					{
						latitude: 31.7335,//纬度，范围为-90~90，负数表示南纬
						longitude: 118.1024,//经度，范围为-180~180，负数表示西经
					}
				]
			}
		},
		methods:{
			openMap() {//点击地图
					uni.openLocation({
						// latitude: this.latitude,
						// longitude: this.longitude,
						latitude: 23.470990,
						longitude: 116.771290,
						name:"澄海汽车总站",
						address: "澄海汽车总站"
					})
				}
			}
	}

</script>

<style>
</style>

