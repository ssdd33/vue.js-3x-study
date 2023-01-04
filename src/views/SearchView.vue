<template>
  <div>
    <div>
      <select v-model="selectedCity">
        <option
          :value="city.cityCode"
          :key="city.cityCode"
          v-for="city in this.cityList"
        >
          {{ city.title }}
        </option>
      </select>
      <input type="text" v-model="userName" @keyup.enter="searchUserList" />
      <button type="button" @click="searchUserList">search</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
          </tr>
        </thead>
      </table>
      <tbody>
        <tr v-for="(person, i) in userList" :key="i">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.sex }}</td>
        </tr>
      </tbody>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { title: '서울', cityCode: '02' },
        { title: '부산', cityCode: '051' },
        { title: '경기도', cityCode: '031' }
      ],
      userName: '',
      userList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    searchUserList() {
      const selectedCity = this.selectedCity
      const userName = this.userName
      this.userList = this.getUserList({ selectedCity, userName })
    },
    getUserList(params) {
      const list = [
        { name: '홍길동', age: 33, sex: 'male' },
        { name: '김길동', age: 33, sex: 'male' },
        { name: '박길동', age: 42, sex: 'female' },
        { name: '이길동', age: 13, sex: 'male' }
      ]
      return list
    }
  }
}
</script>
