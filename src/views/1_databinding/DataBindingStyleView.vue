<template>
  <div :style="style">스타일 바인딩</div>
  <button @click="style.color = 'blue'">색상 바꾸기</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style: {
        color: 'red',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
