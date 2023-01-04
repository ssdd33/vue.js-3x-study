<template>
  <div>
    <input type="search" v-model="searchText" @keyup.enter="checkEnter" />
    <button @click="doSearch">search</button>
  </div>
</template>
<script>
export default {
  /*
   * @keyEvent 에 전달된 이벤트객체에서 keyCode값으로 key를 구분할 수도 있지만  @keyEvent.enter 와 같은 속성으로 특정 키로 별도의 식별작업 없이 함수를 할당할 수도 있다.
   * @keyEvent.stop - event.stopPropagation()를 실행 후 할당된 함수 실행
   * *.prevent - event.preventDefault()를 실행 후 할당된 함수 실행
   */
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter() {
      this.doSearch()
    }
  }
}
</script>
