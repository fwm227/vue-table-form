/**
 * Store ralative data for interact
 */
export default {
  state: {
    titles: [],
    data: [],
    keys: [],
    types: [],
    selectMsg: null,
    rowLength: null,
    selectFn: null,
    switchEvents: null
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
    setSelectMsg: function (msgs) {
      var self = this;
      if (!msgs) self.state.selectMsg = Array.apply(null, {length: self.getState('rowLength')});
      else self.state.selectMsg = msgs;
    },
    initSelectMsg: function () {
      var self = this;
      self.state.selectMsg = Array.apply(null, {length: self.getState('rowLength')});
    },
    setSelectFn: function (fn) {
      if (fn && typeof fn === 'function') this.state.selectFn = fn;
    },
    setSwitchEvents: function (events) {
      this.state.switchEvents = events;
    }
  },
  commit: function (name, ...arg) {
    this.mutations[name].call(this, ...arg);
  }
};
