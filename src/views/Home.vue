<template>
  <div class="home">
    <button class="btn" @click="addCount">点击加一</button>
    {{ $store.state.user.count }}
    <button class="btn" @click="minusCount">点击减一</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods: {
    addCount() {
      this.$store.dispatch('increase');
    },
    minusCount() {
      // 发送到模块的话前面加的user表示模块名
      this.$store.dispatch('user/minusCount');
    },
  },
  components: {},
};
</script>
<style scoped>
.home {
  font-size: 60px;
  font-weight: 700;
}
.btn {
  appearance: none;
  width: 200px;
  padding: 16px 5px;
  font-size: 32px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background: forestgreen;
  border-radius: 10px;
  outline: none;
}
</style>
