/**
 * 章鱼猫模块
 * 这里也可以引入一些模块需要的包或者接口
 * 比如axios等
 */

//定义类型
const CAT = 'CAT'

//定义state
const catState = {
  name: '章鱼猫',
  age: 10,
  friend: 'GitHub'
}

//定义mutation
const mutations = {
  /**
   *@param {Object} state 状态管理对象
   *@param {Object} name 章鱼猫新对象
   */
  [CAT](state, newCat) {
    console.log(state)
    state.name = newCat
  }
}

const actions = {
  /**
   * 请求数据更新章鱼猫对象
   * @param {Object} context 上下文对象
   * @param {*} catHttp 请求到的章鱼猫对象数据
   * @return {Promise} return一个Promise实例
   */
  updateCat(context, catHttp = { name: 'actionName cat' }) {
    setTimeout(() => {
      context.commit('CAT', catHttp)
      return Promise.resolve(catHttp)
    }, 2000)
  }
}

const getters = {
  //定义一个过滤，返回true或false
  filterCat: (catState) => {
    return catState.name != '猫'
  }
}

//导出
export default {
  state: { ...catState },
  mutations,
  actions,
  getters
}
