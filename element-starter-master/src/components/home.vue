<template>
  <div id="app">
  <!-- <el-row>
  <el-container  style="position:fixed; z-index:100;width:100%;">
  <el-header style="text-align: center; font-size: 12px;padding:0;margin-top:-10px">
  
  </el-header>
        </el-container>
  </el-row>
<br><br><br><br> -->
<div style="width:100%;margin:0 auto">
  <el-carousel height="555px" interval="8000">
    <el-carousel-item v-for="(item,index) in imgList" :key="index">
      <a href="javascript:"><img v-bind:src="item.url" width="100%" height="100%" @click="onRoutes(index)"></a>
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div>
   <div style="width:80%;margin:0 auto">
     <!-- <el-carousel >
    <el-carousel-item v-for="(item,index) in imgList" :key="index">
      <img v-bind:src="item.url" width="100%" height="100%">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel> -->
  <br><br><br><br><br>
  <span class="item">专注、靠谱、真诚，帮助企业成功！</span>
    <br>
  <span>Focused,Reliable,Sincere.Make you succeed!</span>
  <br><br>
  <el-row>
  <!-- <el-col :span="8" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 0 : 0">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span>View</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card> -->
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/card/1.png" class="image" @click="onRoutes(100)" style="cursor:pointer">
      <div style="padding: 14px;">
        <span style="font-size:14px">围绕生产型企业，提供全面管理功能。</span>

      </div></el-card>
  </el-col>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/card/2.png" class="image">
      <div style="padding: 14px;">
        <span style="font-size:14px">专注于商业应用，为您解决管理问题。</span>

      </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/card/3.png" class="image">
      <div style="padding: 14px;">
        <span style="font-size:14px">汽车维修、美容装潢及一站式服务管理。</span>

      </div>
    </el-card><br><br>
  </el-col>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/card/4.png" class="image">
      <div style="padding: 14px;">
        <span style="font-size:14px">移动进销存、微商城订货等综合服务。</span>

      </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/card/5.png" class="image">
      <div style="padding: 14px;">
        <span style="font-size:14px">数据分析、故障排查、软件安装与培训。</span>

      </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/card/6.png" class="image">
      <div style="padding: 14px;">
        <span style="font-size:14px">为企业个性化需求提供开发服务。</span>

      </div>
    </el-card>
  </el-col>
</el-row>

 <br><br>
 <span class="item">济胜正在为企业解决管理问题</span>
    <br>
  <span>We help to solve your problems such as...</span>
 <br><br>
 <span style="margin-left:-5%;font-size:18px">企业问题</span>
 <span style="margin-left:35%;font-size:18px">解决方案</span>
  <el-tabs tabPosition="left"  style="position：center;background-color:#f5f5f5;">
    <el-tab-pane>
      <span slot="label">
      <el-button plain class="el-tabs-button" @click="show1 = true,show2 = false,show3 = false,show4 = false">
          <h3 style="color:#409EFF"><i class="el-icon-document"></i>订单管理难</h3><br><br>
          <i><p style="margin-top:-5%">未发货订单总数有多少？正在生产的有多少？
            <!-- <br>可以生产的有多少？不能生产的有多少？为什么不能生产？ -->
            </p><br></i>
      </el-button>
      </span>
      <el-collapse-transition>
        <div v-show="show1">
          <div class="transition-box">订单订单订单订单</div>
          <div class="transition-box">订单订单订单,订单订单订单</div>
        </div>
      </el-collapse-transition>
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label">
      <el-button plain class="el-tabs-button" @click="show2 = true,show1 = false,show3 = false,show4 = false">
          <h3 style="color:#409EFF"><i class="el-icon-edit-outline"></i>计划管理难</h3><br><br>
          <i><p style="margin-top:-5%">如何有效安排生产计划？接到紧急订单如何调整计划？
            <!-- <br>接到紧急订单如何调整计划？如何快速判断能否插单？ -->
            </p><br></i>
      </el-button>
      </span>
      <el-collapse-transition>
        <div v-show="show2">
          <div class="transition-box">MRP运算</div>
          <div class="transition-box">缺料提醒,备料分析</div>
        </div>
      </el-collapse-transition>  
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label">
      <el-button plain class="el-tabs-button" @click="show3 = true,show1 = false,show2 = false,show4 = false">
          <h3 style="color:#409EFF"><i class="el-icon-goods"></i>物料管理难</h3><br><br>
          <i><p style="margin-top:-5%">物料积压浪费严重，经常性的停工待料</p><br></i>
      </el-button>
      </span>
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">afzxcz23124物料123asdasdad</div>
          <div class="transition-box">231415物料315135vzvadvavasv</div>
        </div>
      </el-collapse-transition>
      </el-tab-pane>

    <el-tab-pane>
      <span slot="label">
      <el-button plain class="el-tabs-button" @click="show4 = true,show1 = false,show2 = false,show3 = false">
          <h3 style="color:#409EFF"><i class="el-icon-bell"></i>事务进度跟踪难</h3><br><br>
          <i><p style="margin-top:-5%">
            <!-- 采购进度跟进不力，改到的没到，严重影响生产进度和交期。<br> -->
            订单执行到那一步,何时能够发货？</p><br></i>
      </el-button>
      </span>
      <el-collapse-transition>
        <div v-show="show4">
          <div class="transition-box">事务</div>
          <div class="transition-box">事务</div>
        </div>
      </el-collapse-transition>
      </el-tab-pane>
  </el-tabs>
  <br><br>
  <span class="item">他们都选择济胜！</span>
    <br>
  <span>We are trusted!</span>
  <br><br>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <br><br>
 </div>
 <el-footer>
   <!-- Footer -->
  <div style="width:80%;margin:0 auto;">
  <el-row>
  <el-col :span="8">
    <!-- <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span>View</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card> -->
    <el-badge value="new" class="item">最新资讯</el-badge>
    <!-- <div class="scroll-wrap">
    <ul class="scroll-content" :style="{ top }">
        
        <li v-for="item in prizeList" :key="item">{{item.name}}</li >
         
    </ul>
</div> -->
    <br>
    <span style="float:right;margin-right:-150%;font-size:14px"><router-link :to="{path:'/newsList'}" class="around">
    查看更多</router-link></span>
  </el-col>
</el-row>
<div style="text-align:left;margin-left:17%">
<p class="mid"><router-link :to="{path:'/news?news_id=' + this.id_1}" class="around">
  {{ date_1 }}&nbsp;&nbsp;&nbsp;&nbsp;{{ news_1 }}</router-link></p>
  <span>{{ article }}</span>
<p class="mid"><router-link :to="{path:'/news?news_id=' + this.id_2}" class="around">
  {{ date_2 }}&nbsp;&nbsp;&nbsp;&nbsp;{{ news_2 }}</router-link> </p>
</div><p>&nbsp;</p>

<hr style="height:50px;border:none;border-top:1px solid #DCDFE6;" />
<el-row >
  <el-col :span="6">
    <el-card shadow="hover">
        <div slot="header" class="clearfix">
        <span class="mid"><Icon type="person" style="font-size:20px"></Icon>&nbsp;我想了解</span>
        </div>
      <el-breadcrumb separator="" style="margin-left:10%">
          <el-breadcrumb-item :to="{ path: '/' }">济胜商务管理系统</el-breadcrumb-item>

          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">济胜ERP系统</el-breadcrumb-item>

          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">移动APP应用</el-breadcrumb-item>

          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">微商城订货系统</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span class="mid"><Icon type="person-add" style="font-size:20px"></Icon>&nbsp;我是客户</span>
      </div>
      <el-breadcrumb separator="" style="margin-left:10%">
          <el-breadcrumb-item :to="{ path: '/welcome' }">济胜商务管理系统</el-breadcrumb-item>

          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">济胜ERP系统</el-breadcrumb-item>

          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">移动APP应用</el-breadcrumb-item>

          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">微商城订货系统</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
      <span class="mid"><Icon type="person-stalker" style="font-size:20px"></Icon>&nbsp;我是伙伴</span>
      </div>
      <el-breadcrumb separator="" style="margin-left:10%">
          <el-breadcrumb-item :to="{ path: '/welcome' }">常见问题</el-breadcrumb-item>
          
          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/download' }">资料与软件下载</el-breadcrumb-item>
          
          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">需求提交</el-breadcrumb-item>
          
          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">在线申请</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      <Icon type="ios-telephone" style="font-size:20px"></Icon>&nbsp;
      <span class="mid">预约上门服务</span>
      <h1 style="color:#409EFF;margin-top:24%">0579-83181608</h1>
      <p class="mid">周一至周六</p>
      <p class="mid">8：30 — 17：30</p>
    </el-card>
  </el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
   <!-- <el-row>
     <el-col>
       <el-breadcrumb separator="" style="margin-left:10%">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
          <br><br><br>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item><el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
     </el-col>
   </el-row> -->
   <!-- <router-view></router-view> -->
  </div>
 </el-footer>

</div>
</template>

<script>
import axios from 'axios';
// axios.get('/api').then(function (response) {
// 　　alert("api数据");
// }).catch(function (error) {
// 　　alert(error);
// });
export default {
  data: () => ({
    imgList: [
      {
        url:require('../assets/carousel/1.jpg')
      },
      {
        url:require('../assets/carousel/2.jpg')
      },
      {
        url:require('../assets/carousel/3.jpg')
      },
      {
        url:require('../assets/carousel/4.jpg')
      },
      {
        url:require('../assets/carousel/5.jpg')
      }
    ],
    article: '',
    news_1:'',
    news_2:'',
    id_1:'',
    id_2:'',
    date_1:'',
    date_2:'',
    show1: true,
    show2: false,
    show3: false,
    show4: false,
    prizeList: [
        { name: 0 },
        { name: 1 }
      ],
      activeIndex: 0
  }),
  // computed: {
  //   onRoutes() {
  //     return this.$route.path.replace("/", "");
  //   }
  // },
  computed: {
    top() {
      return - this.activeIndex * 20 + 'px';
    }
  },
  mounted() {
    setInterval(_ => {
      if(this.activeIndex < this.prizeList.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 1000);
//     axios.get('/api').then((response) => {
//       // for(var a in response.data){
//       //   alert(response.data[a].title);
//       // }
//       this.news_1 = response.data[0].title;
//       this.news_2 = response.data[1].title;
//       var d1 = new Date(response.data[0].createTime);
//       var d2 = new Date(response.data[1].createTime);
//       this.date_1 = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate() + ' ' 
//       // + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
//       this.date_2 = d2.getFullYear() + '-' + (d2.getMonth() + 1) + '-' + d2.getDate() + ' '
//     }).catch(function (error) {
// 　　  alert(error);
//     });
    function pad2(n){
      return n < 10 ? '0' + n : n
    };
    axios.get('/asp/article.asp').then((response) => {
      // alert(response.data.rows[0].createTime);
      this.id_1 = response.data.rows[0].news_id;
      this.id_2 = response.data.rows[1].news_id;
      this.news_1 = response.data.rows[0].title;
      this.news_2 = response.data.rows[1].title;
      var d1 = new Date(response.data.rows[0].createTime);
      var d2 = new Date(response.data.rows[1].createTime);
      this.date_1 = d1.getFullYear() + '-' + pad2(d1.getMonth() + 1) + '-' + pad2(d1.getDate()) + ' ' ;
      this.date_2 = d2.getFullYear() + '-' + pad2(d2.getMonth() + 1) + '-' + pad2(d2.getDate()) + ' ' ;
     }).catch(function (error) {
　　  alert(error);
    });
  },
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onRoutes(i) {
      switch(i)
      {
      case 1:
        this.$router.push('/made');
        break;
      case 100:
        this.$router.push('/made2');
        break;
      }
      // if(i == 1){
      //   // this.$axios('get',"../static/productList.json",{id:page1}).then(response => {  
      //   //   this.itemList = response.data.result.list;  
      //   // });
      //   this.$router.push('/made');
      // } else {
      //   this.$router.push('/error');
      // }
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-breadcrumb__item {
  float: left;
  margin-left: 10%;

}
.el-breadcrumb__inner.is-link {
  color: #606266;
  font-weight: 500;
}
.el-tabs-button {
  border: 0px solid #dcdfe6;
  text-align: right;
  width: 100%;
  background-color:#f5f5f5;
}
.layout-logo {
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  left: 10%;
  margin-top: 5px;
  z-index: 100;
}
/* .el-menu {
  margin-left: -1.5%;
  width:120%;
  margin-top:-1%
} */
.el-card {
  width: 80%;
  margin-left: 10%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-tabs__item {
  height: auto;
  padding: 0 2px;
}

.bg-purple {
  background: #fff;
}

.grid-content {
  border-radius: 4px;
  min-height: 120px;
}
.item {
  margin-top: 10px;
  margin-left: 0%;
  font-size: 21px;
}
.mid {
  margin-top: 10px;
  margin-left: 0%;
  font-size: 16px;
}
.scroll-wrap{
  width: 200px;
  height: 50px;
  border: 1px solid blue;
  overflow: hidden;
}

.scroll-content{
  position: relative;
  transition: top 1s;

}
.around:hover{
  color: #409eff;
}
.el-card:hover img{

-webkit-transform:scale(1.1);-o-transform:scale(1.1);

}
</style>