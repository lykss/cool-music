<template>
  <div id="app">
    <common-header></common-header>
    <common-tab></common-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import CommonHeader from 'components/CommonHeader/CommonHeader'
import CommonTab from 'components/CommonTab/CommonTab'

export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonTab
  }
}
</script>
