<template>
  <div>
    <div :class="{ 'text-red': hasError, active: isActive }">클래스 바인딩</div>
  </div>
</template>
<script>
export default {
  /*
   *:class 속성에 스타일 클래스에 종속될지 여부(bool)를 객체값으로 할당할 수 있다.
   *클래스명이 한단어일경우 따움표로 묶지 않아도 됨
   *배열로 여러개의 클래스명을 할당할 수도 있다.
   */
  components: {},
  data() {
    return {
      isActive: false,
      hasError: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: green;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
