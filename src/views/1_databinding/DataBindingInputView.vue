<template>
  <div>
    <input type="text" v-model="userId" />
    <div>{{ userId }}</div>
    <button @click="myFunction">click</button>
    <button @click="changeData">change</button>
    <br />
    <input type="text" v-model.number="num1" /> +
    <input type="text" v-model.number="num2" /> =
    <span>{{ num1 + num2 }}</span>
  </div>
</template>
<script>
export default {
  /*
   *양방향 데이터 바인딩, 가상 DOM을 이용한 빠른 화면 전환
   */
  components: {},
  data() {
    return {
      userId: 'hello',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      //  vue 인스턴스 내부의 this 키워드는 data()에서 반환되는 객체 범위를 지칭한다.
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'jeremy'
    }
  }
}
</script>
