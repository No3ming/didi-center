<template>
  <container class="center">
    <p class="not-found-tip">欢迎来到滴滴财务个人中心</p>
    <actionsheet v-model="isShow" :menus="menu" :close-on-clicking-mask="false"
                 :close-on-clicking-menu="false" @on-click-menu="onGoTo">
      <div slot="header">
        <p class="tips-header">提示</p>
        <span class="tips-content">请选择你要去的页面</span>
      </div>
    </actionsheet>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import {Actionsheet} from 'vux'

  export default {
    name: 'center',
    data () {
      return {
        isShow: true,
        menu: {
          'user': '需求端个人中心',
          'accountant': '服务端个人中心'
        }
      }
    },
    methods: {
      onGoTo (value) {
        window.location.replace('/' + value + '/?path=center')
      }
    },
    components: {
      Container,
      Actionsheet
    }
  }
</script>

<style lang="less">
  .center {
    padding-top: 76px;
    text-align: center;

    .not-found-tip {
      margin-top: 40px;
      margin-bottom: 12px;
      font-size: 18px;
      color: #767676;
    }
    .tips-header {
      font-size: 16px;
    }
    .tips-content {
      font-size: 12px;
      color: red;
    }
  }
</style>
