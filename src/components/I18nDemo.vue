<template>
  <div>
    <p>{{ $t('message.hello', { msg: 'hello' }) }}</p>
    <p>{{ defaultStr }}</p>
    <p>张三</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {},
  data() {
    return {
      defaultStr: this.$t('message.hello')
    };
  }
};
</script>

<style></style>
