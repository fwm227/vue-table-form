import Store from '../store/index.js';
import tableHead from '../head/index.js';
import tableBody from '../body/index.js';

export default {
  name: 'table',
  data () {
    return {
      selectState: false,
      allSelect: false
    }
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    columns: {
      type: Array,
      default: function () {
        return [];
      }
    },
    select_event: Function
  },
  created () {
    var self = this;
    // init store
    var titles = [];
    var keys = [];
    var types = [];
    if (self.select_event) self.columns.unshift({type: 'checkbox'});
    var switchEvents = Array.apply(null, {length: self.columns.length});

    self.columns.forEach(function (col, idx) {
      titles.push(col.title);
      keys.push(col.key);
      types.push(col.type ? col.type : 'text');
      if (col.type === 'switch') switchEvents[idx] = col.event;
    });
    Store.commit('setTitles', titles);
    Store.commit('setData', self.data);
    Store.commit('setKeys', keys);
    Store.commit('setTypes', types);
    Store.commit('initSelectMsg');
    Store.commit('setSelectFn', self.select_event);
    Store.commit('setSwitchEvents', switchEvents);
  },
  components: {
    tableHead,
    tableBody
  },
  render (h) {
    var self = this;
    return h('table', {staticClass: 'table-wrapper'}, [
      h('table-head', {
        attrs: {
          selectState: self.selectState
        },
        on: {
          selectAll (state) {
            self.allSelect = state;
            if (state) self.selectState = 1;
            else if (!state) self.selectState = -1;
          }
        }
      }),
      h('table-body', {
        attrs: {
           allSelect: self.allSelect
        },
        on: {
          setSelectAllState (state) {
            self.selectState = state;
            // state value is one indicate all-selct, state value is zero indicate none-select
            if (state === 1) self.allSelect = true;
            else if (state === -1) self.allSelect = false;
          }
        }
      })
    ]);
  }
}
