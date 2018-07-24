<template>
  <div id="ss">
    <div style="width:90%;margin:0 auto;">
      <img src="../assets/business/济胜商务管理系统banner.jpg">
      <br><br><br><br><br>
      <div  style="width:80%;margin:0 auto;">
        <div class="content">
          <span class="items">经典版：简单应用</span>
          <P>提供采购、销售、库存、应收、应付、短信等管理，实现企业进销存核心业务的管理。</p>
          <br>
          <span class="items">标准版：常规应用</span>
          <p>常规的单店面客户基本上都可以满足需求。管理点和经典版类似，增加了订单管理、批次管理、预收预付、会员管理等功能。库存管理方面还提供了物品的赠送、借进、借出、仓库报损等功能，从而达到对企业库存更为全面管理手段。</p>
          <br>
          <span class="items">增强版：较高级的应用</span>
          <p>在标准基础上可以支持多个店面的统一管理，提供售前管理。并能够适应各种各样的行业特性。适用于区域行业领先者；对管理有较高要求的企业；连锁经营商贸类企业。</p>
          <span class="items">全能版：特色应用</span>
          <p>在增强版基础上增加送货派工安装、维修保养服务管理。主要适用于商品价值较高或对“服务”有较高要求的企业，比如家电、电梯、建材、卫浴、净水机等行业。</p>
        </div>
        <img src="../assets/business/济胜商务-01.png">
        <br><br><br>
        <div class="content">
          <span class="items">2.主生产计划及MRP</span>
          <p>MRP(Material Requirement Planning)物料需求计划：是根据市场需求预测和顾客订单制定产品的生产计划，然后基于产品生成进度计划，根据产品BOM清单和库存状况，计算所需物料的需求量和需求时间，从而确定材料的加工进度和采购日程。</p>
          <p>系统以整体主生产计划为基础，主生产计划及生产执行计划的产生过程中均包括了能力需求计划，使得物料需求计划成为可行的计划。</p>
          <p>MRP运算将根据去向、需求提前期等自动生成“生产计划、采购计划、委外计划”等，对物料需求提前计划，以避免物料短缺。</p>
          <br>
          <span class="items">3.生产排程</span>
          <p>执行生产单缺料提醒</p>
          <p>当生产物料严格按订单跟踪时，系统提供了执行生产单缺料提醒：</p>
          <p>已完成：该生产计划所发出的采购计划已完成，库存数量也够；</p>
          <p>计划未完成：该生产计划所发出的采购计划未完成；</p>
          <p>库存不够：该生产计划所发出的采购计划已完成，但按生产任务单物料表展开，相应物料的库存数量不够；</p>
        </div>
          <img src="../assets/made/02.png">
        <div class="content">
          <p>右击上表格生产任务单，可查看缺料情况。</p>
          <br>
          <span class="items">4.生产排程模拟，便于安排插单、订单加急等操作</span>
          <p>对大多数生产企业而言，在原有的生产计划途中有新的计划插入，是经常发生的。这会使得原有计划出现混乱。这时，就需要利用系统对订单进行模拟排程，就能知道插入新订单后，原有的计划的物料备料是否足够，就能知道新订单是否合适插入。</p>
        </div>
          <img src="../assets/made/03.png">
          <br><br><br>
        <div class="content">
          <span class="items">5.生产看板展示生产进度</span>
          <br><br>
        </div>
          <img src="../assets/made/04.png">
          <br><br><br>
        <div class="content">
          <br>
          <span class="items">6.工资管理</span>
          <p>济胜智造的计件工资管理主要是依托物品生产工序，提供从工序的设置、计件工资录入到最后生成工资表等功能。通过计件工资管理也可以完成对生产任务单的进度跟踪。</p>
          <br>
          <span class="items">7.生产成本核算</span>
          <p>根据企业不同情况，提供多种成本核算方式</p>
          <br>
          <span class="items">8.质量管理</span>
          <p>系统提供了车间检验流程、生产检验流程、委外检验流程、采购检验流程。</p>
          <br>
          <span class="items">9.技术资料管理</span>
          <p>提供物品文件和单据文件管理，比如包装要求、加工说明、设计图纸等。在添加相应文件时可以指定该文件哪个操作员有权限查看。这样，相关人员可以随时调用这些技术资料。</p>
          <br>
          <span class="items">10.异常情况预警</span>
          <p class="items">济胜智造带来的效益</p>
        </div>
        <img src="../assets/made/05.png">
        <div class="content">
          <p>企业智能制造发展模式和路径还需进一步探索，避免盲目求大求全、仓促上阵。选择济胜智造作为智能化发展转型战略合作伙伴，帮您制定整体的长远规划，逐步走向智能制造之路！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.items {
  margin-top: 10px;
  margin-left: 0%;
  font-size: 21px;
  color: #409eff;
}
.content {
  text-align:left;
  line-height:30px
}
body {
  font-size: 14px;
}
</style>