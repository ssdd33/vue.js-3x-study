<template>
  <div>
    <div>
      <input
        type="radio"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JS" v-model="favoriteLang" />
      <label for="js">javaScript</label>
    </div>
    <span>{{ favoriteLang }}</span>
  </div>
</template>
<script>
export default {
  /*
   *checkbox태그와 사용법은 동일하지만 radio는 하나의 옵션만 선택 가능하므로 v-model은 문자열이다.
   */
  components: {},
  data() {
    return {
      favoriteLang: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
