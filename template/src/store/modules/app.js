let state = {
  example: document.documentElement.scrollHeight + 'px',
  total: 0
  
};

let getters = {};

let mutations = {
  example: state => state.example = document.documentElement.scrollHeight + 'px',
  Change (state, total) {
    state.total = total
  },
};

let actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
