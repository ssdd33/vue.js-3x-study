<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="all"
        :checked="favoriteLang.length === 3"
        @change="onCheckAll"
      />
      <label for="html">check all</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="css"
        value="CSS"
        v-model="favoriteLang"
      />
      <label for="css">CSS</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="js"
        value="JS"
        v-model="favoriteLang"
      />
      <label for="js">javaScript</label>
    </div>
    <span>{{ favoriteLang }}</span>
  </div>
</template>
<script>
export default {
  /*
   *checkbox의 v-model은 checked 속성값과 연결되어있다.
   *여러개의 checkbox에 하나의 v-model 배열을 연결할 수 있다.
   */

  components: {},
  data() {
    return {
      favoriteLang: ['JS']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    onCheckAll(e) {
      const checked = e.target.checked

      console.log(e.target.checked)
      if (checked) {
        this.favoriteLang = ['JS', 'CSS', 'HTML']
      } else {
        this.favoriteLang = []
      }
    }
  }
}
</script>
