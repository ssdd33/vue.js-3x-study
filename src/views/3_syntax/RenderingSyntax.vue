<template>
  <div>
    <h1 v-if="bRender">bRender값이 true이면, h1 블록이 화면에 보여집니다.</h1>
    <h2 v-else>bRender값이 false이면, h2 블록이 화면에 보여집니다.</h2>
    <button @click="() => (this.bRender = !this.bRender)">
      bRender 바꾸기
    </button>
    <br />
    <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if="type == 'B'">B</h1>
    <h1 v-else>C</h1>
    <br />
    <html v-show="bRender">
      show
    </html>
  </div>
</template>
<script>
export default {
  /*
   * v-if문은 조건에 맞는 블록만 렌더링, 조건에 맞지 않는 블록은 dom에 존재하지 않는다.
   * v-show문은 display:none 속성값이 추가된 태그블록이다.
   */
  components: {},
  data() {
    return {
      bRender: true,
      type: 'C'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    onClick() {
      this.bRender = !this.bRender
    }
  }
}
</script>
