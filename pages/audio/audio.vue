<template>
    <view>
			1111
	<!-- 		<camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
			<button type="primary" @click="takePhoto">拍照</button>
			<view>预览</view>
			<image mode="widthFix" :src="src"></image> -->
	</view>
</template>

<script>
	import echarts from '@/echartsComponents/echarts/echarts.min.dingzhi_simple.js';
	export default {
	    data() {
	        return {
	            src:""
	        }
	    },
	    methods: {
	        //  takePhoto() {
	        //     const ctx = uni.createCameraContext();
	        //     ctx.takePhoto({
	        //         quality: 'high',
	        //         success: (res) => {
	        //             this.src = res.tempImagePath
	        //         }
	        //     });
	        // },
	        // error(e) {
	        //     console.log(e.detail);
	        // }
	    }
	}
</script>

<style>
</style>
