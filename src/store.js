import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data: {
    //   appNo: null,
    //   familyName: null,
    //   givenName: null,
    //   tel: null,
    //   gender: null,
    //   birthYear: null,
    //   birthMonth: null,
    //   birthDay: null,
    //   postalCode: null,
    //   addressLevel1: null,
    //   addressLevel2: null,
    //   addressLine1: null,
    //   addressLine2: null,
    //   email: null,
    //   emailComfirm: null,
    // },
    // dataName: {
    //   gender: null
    // }
    data: {
      appNo: null,
      familyName: '山田',
      givenName: '太郎',
      tel: '0312345678',
      gender: '1',
      birthYear: '1990',
      birthMonth: '1',
      birthDay: '1',
      postalCode: '1000014',
      addressLevel1: '東京都',
      addressLevel2: '千代田区永田町１丁目',
      addressLine1: '７−１',
      addressLine2: '',
      email: 'sample@test.data',
      emailComfirm: 'sample@test.data'
    },
    dataName: {
      gender: '男性'
    }
  },
  getters: {
    getData: function(state) {
      return state.data
    },
    getDataName: function(state) {
      return state.dataName
    }
  },
  mutations: {
    setData(state, payload) {
      state.data[payload.key] = payload.value
    },
    setDataName(state, payload) {
      state.dataName[payload.key] = payload.value
    },
    clearData(state) {
      for (var key1 in state.data) {
        state.data[key1] = null
      }
      for (var key2 in state.dataName) {
        state.dataName[key2] = null
      }
    }
  },
  actions: {
    appData(context) {
      alert(
        'このタイミングでAPIを呼び出し、以下のJSONをサーバへ連携する\n' +
          '\n' +
          JSON.stringify(this.state.data, null, 4)
      )

      // API呼び出し
      // return axios.post('./data/app.json', this.state.data) // ほんとはPOST
      return axios.get('./data/app.json').then(function(res) {
        context.commit('setData', {
          key: 'appNo',
          value: res.data.appNo
        })
      })
    }
  }
})
