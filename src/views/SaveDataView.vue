<template>
  <div>
    <input type="text" v-model="name" />
    <input type="number" v-model="age" /><input type="text" v-model="sex" />
    <button @click="saveUserInfo">저장</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      name: '',
      age: 0,
      sex: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    saveUserInfo() {
      if (this.name === '') {
        return alert('이름을 입력하세요')
      }

      if (this.age === 0 || this.age === '') {
        return alert('나이를 입력하세요')
      }

      const params = {
        name: this.name,
        age: this.age,
        sex: this.sex
      }

      const result = this.saveData(params)

      if (result === 'success') {
        return alert('사용자 정보가 생성되었습니다.')
      }
    },
    saveData(params) {
      const result = 'success'

      return result
    }
  }
}
</script>
