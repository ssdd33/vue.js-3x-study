<template>
  <div>
    <button @click="getProductList">search</button>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>제품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productList" :key="item.id">
          <td>{{ item.drinkId }}</td>
          <td>{{ item.drinkName }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.qty }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      productList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async getProductList() {
      this.productList = await this.api(
        'https://5dd51516-3bfa-4b23-bbb2-2f5c3f33f6bd.mock.pstmn.io/productlist',
        'GET',
        {}
      )
    },
    async api(url, method, data) {
      return (
        await axios({
          method,
          url,
          data
        }).catch((e) => {
          console.log(e)
        })
      ).data
    }
  }
}
</script>
