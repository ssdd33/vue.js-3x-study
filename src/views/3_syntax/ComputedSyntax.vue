<template>
  <input type="text" v-model="lastName" /><input
    type="text"
    v-model="firstName"
  />
  <div>{{ fullName }}</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      lastName: '',
      firstName: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  computed: {
    // 호출시 함수이름만 변수처럼 사용되며,한번의 연산만 이뤄진다. 내부의 데이터 속성이 변했을때 이를 감지하고 자동으로 재연산한다.
    fullName() {
      return this.lastName + this.firstName
    }
  },
  methods: {}
}
</script>
