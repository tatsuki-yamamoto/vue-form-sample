import router from './../../router'

// 固定値
var LISTS = {
  gender: {
    '1': '男性',
    '2': '女性'
  }
}

export default {
  created() {
    // バリデーションをリセット
    this.$validator.reset()
  },
  computed: {
    data: function() {
      return this.$store.getters['getData']
    }
  },
  methods: {
    setData(e) {
      // 入力値設定
      this.$store.commit('setData', {
        key: e.target.name,
        value: e.target.value
      })
      // 名称設定
      if (LISTS[e.target.name]) {
        this.$store.commit('setDataName', {
          key: e.target.name,
          value: LISTS[e.target.name][e.target.value]
        })
      }
    },
    goNext() {
      // バリデートの判定
      this.$validator.validateAll().then(function(result) {
        if (result === false) {
          // エラー時の処理
          alert('入力内容に不備があります')
          return false
        }
        // エラーがなかった時の処理を下に記述
        // ページ遷移
        router.push({
          path: '/ConfirmArea'
        })
      })
    }
  }
}
