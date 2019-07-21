<template>
  <div class="login-container">
    <div class="input-cont">
      <div class="logo">
        <a>龍</a>
      </div>
      <div class="input-prepend name">
      	<i></i>
	      <input placeholder="手机号" v-model="phone" name="name" />
	    </div>
      <div class="input-prepend password">
      	<i></i>
	      <input placeholder="密码" v-model="password" name="password" type="password" />
	  	</div>
	  	<div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
	import axios from 'axios';
  import api from '../api';
  import { setCookie } from '../lib/cookie';
  export default {
    data() {
      return {
      	phone: '',
      	password: ''
      };
    },
    methods: {
      login() {
      	let params = {
      		'phone': this.phone,
      		'password': this.password
      	};
      	if (params.phone === '') {

      	} else if (params.password === '') {

      	} else {
	        api.login(params).then((res) => {
	        	var data = res.data.data;
	        	axios.defaults.headers['x-access-token'] = data.token;
	        	setCookie('blog_token', data.token, data.config);
	        	this.$router.push({name: 'articleList'});
	        	this.$parent.userInfo = data.userInfo;
	        });	
      	}
      }
    },
  };
</script>

<style lang="scss">
  .login-container {
  	height: 100%;

  	.logo {
  		text-align: center;
  		color: #EC7259;
	  	font-size: 48px;
	  	margin-bottom: 20px;
	  }
  	.input-cont {
	  	width: 300px;
	  	padding: 50px;
	  	margin: 50px auto 0 auto;
	  	border-radius: 5px;
	  	-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=0, Color=#EC7259)";/*IE 8*/
			-moz-box-shadow: 0 0 2px 2px #EC7259;/*FF 3.5+*/
			-webkit-box-shadow: 0 0 2px 2px #EC7259;/*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
			box-shadow: 0 0 2px 2px #EC7259;/* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
			filter: progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color=#EC7259); /*IE 5.5-7*/

			.input-prepend {
				position: relative;
				border: 1px solid #c8c8c8;
				background: #f6f6f6;
				overflow: hidden;

				&.name {
					border-bottom-width: 0px;
					border-radius: 5px 5px 0 0;
				}
				&.password {
					border-radius: 0 0 5px 5px;
				}
				i {
					position: absolute;
					top: 13px;
					left: 10px;
					height: 25px;
					line-height: 25px;
				}
				i:after {
					content: "\E65E";
				}
				input {
					display: block;
					box-sizing: border-box;
					background: #f6f6f6;
					border-width: 0;
					width: 100%;
					height: 50px;
					padding: 5px 12px 5px 35px;
				}
			}
			.login-btn {
				margin-top: 30px;
				text-align: center;
				color: #FFF;
				font-size: 24px;
				background: #EC7259;
				height: 50px;
				line-height: 50px;
				border-radius: 50px;
				cursor: pointer;
			}
	  }
  }
</style>
