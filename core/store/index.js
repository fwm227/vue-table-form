/**
 * Store ralative data for interact
 */
export default {
  state: {
    titles: [],
    data: [],
    keys: [],
    types: [],
    events: [],
    colEventMsg: [],
    rowLength: null
  },
  getState: function (key) {
    return this.state[key];
  },
  mutations: {
    setData: function (data) {
      data.map(function (item, idx) {
        item.key = idx;
        return item;
      });
      this.state.data = data;
      this.state.rowLength = data.length;
    },
    setTitles: function (val) {
      this.state.titles = val;
    },
    setKeys: function (val) {
      this.state.keys = val;
    },
    setTypes: function (val) {
      this.state.types = val;
    },
    setEvents: function (val) {
      this.state.events = val;
    },
    setEventMsg: function (colIdx, msgs) {
      this.state.colEventMsg = this.state.colEventMsg.splice(colIdx, 1, msgs);
    },
    initEventMsg: function (colLen) {
      this.state.colEventMsg = Array.apply(null, {length: colLen});
    }
  },
  commit: function (name, ...arg) {
    this.mutations[name].call(this, ...arg);
  }
};
