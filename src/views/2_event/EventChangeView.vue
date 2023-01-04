<template>
  <div>
    <select name="" @change="changeCity" v-model="selectedCityCode">
      <option value="">==도시선택==</option>
      <option
        v-for="city in cityList"
        :key="city.cityCode"
        :value="city.cityCode"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" v-on:change="changeDong">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
    <select name="" :value="selectedDongCode">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter(
          (dong) => dong.cityCode === selectedCityCode
        )"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCityCode: '',
      selectedDongCode: '',
      cityList: [
        { title: '서울', cityCode: '02' },
        { title: '부산', cityCode: '051' },
        { title: '경기도', cityCode: '031' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: 'seoul1dong' },
        { cityCode: '02', dongCode: '2', dongTitle: 'seoul2dong' },
        { cityCode: '031', dongCode: '1', dongTitle: 'kyeongki1dong' },
        { cityCode: '031', dongCode: '2', dongTitle: 'kyeongki2dong' },
        { cityCode: '051', dongCode: '1', dongTitle: 'busan1dong' },
        { cityCode: '051', dongCode: '2', dongTitle: 'busan2dong' },
        { cityCode: '051', dongCode: '3', dongTitle: 'busan3dong' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity() {
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCityCode
      )
    },
    changeDong(e) {
      console.log(e)
      const value = e.target.value
      this.selectedDongCode = value
    }
  }
}
</script>
