import router from './../../router'
// import store from './../../store'

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
    goFirstPage() {
      this.$store.commit('clearData')
      router.push({ path: '/InputArea' })
    }
  }
}
