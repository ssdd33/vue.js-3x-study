<template>
  <div>
    <input type="text" :value="userId" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" v-model="txt1" />
    <button :disabled="txt1 === ''">search</button>
  </div>
</template>
<script>
export default {
  /*
   *readonly 필드와 같이 양방향 데이터 바인딩이 필요없는 경우 v-bind:value 속성에 데이터를 바인딩할 수 있다. 이때 v-bind는 생략 가능하다.
   *속성값에 계산식을 할당하는 경우 v-bind:속성 이름 을 사용할 수 있다.
   */
  components: {},
  data() {
    return {
      userId: 'ddd',
      imgSrc:
        'https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
