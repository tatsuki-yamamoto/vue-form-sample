import router from './../../router'
import store from './../../store'

export default {
  computed: {
    data: function() {
      return this.$store.getters['getData']
    },
    dataName: function() {
      return this.$store.getters['getDataName']
    }
  },
  methods: {
    goBack() {
      router.push({
        path: '/InputArea'
      })
    },
    goNext() {
      // 申込
      store.dispatch('appData').then(function() {
        // 完了画面へ遷移
        router.push({
          path: '/CompleteArea'
        })
      })
    }
  }
}
