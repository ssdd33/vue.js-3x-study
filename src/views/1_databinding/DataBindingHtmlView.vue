<template>
  <div v-html="htmlString"></div>
</template>
<script>
export default {
  /*
   * 단방향 데이터 바인딩
   * 태그에 속성 추가하기 (v-directive) v-속성이름 ="속성 값"
   * v-html 속성 값으로 할당된 키의 값은 innerHtml로 해당 태그에 추가된다.
   */
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
