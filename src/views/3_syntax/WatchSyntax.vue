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
      firstName: '',
      lastName: '',
      fullName: ''
    }
  },
  watch: {
    // data()값의 변경을 감지하여 동일한 이름에 할당된 연산식을 실행한다. 많은 자원을 소모하는 기능.
    firstName() {
      this.fullName = this.lastName + this.firstName
    },
    lastName() {
      this.fullName = this.lastName + this.firstName
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
