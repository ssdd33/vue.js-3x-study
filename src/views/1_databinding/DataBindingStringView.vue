<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  /*
   *단방향 데이터 바인딩 : data()함수에서 반환되는 객체안의 키-값 데이터는 html,script 내부에서 사용가능하다.
   * */
  data() {
    return {
      userName: 'John Doe',
      message: 'welcome 개발자의 품격',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
/*
 * css-scoped.vue : 현재 파일에만 적용되는 스타일
 * scoped태그 없이 사용할 경우 프로젝트 전체에 적용된다. ( 공통 스타일은 assets 폴더에 정의한다.)
*/
.text-red {
  color: red;
}
</style>
