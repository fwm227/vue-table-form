import Store from '../store/index.js';
import tableHead from '../head/index.js';
import tableBody from '../body/index.js';

export default {
  data () {
    return {
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
    }
  },
  created () {
    var self = this;
    // init store
    var titles = [];
    var keys = [];
    var types = [];
    var events = [];
    self.columns.forEach(function (col, idx) {
      titles.push(col.title);
      keys.push(col.key);
      types.push(col.type ? col.type : 'text');
      events.push(col.event);
    });
    Store.commit('setTitles', titles);
    Store.commit('setData', self.data);
    Store.commit('setKeys', keys);
    Store.commit('setTypes', types);
    Store.commit('setEvents', events);
    Store.commit('initEventMsg', this.columns.length);
  },
  components: {
    tableHead,
    tableBody
  },
  render (h) {
    var self = this;
    return h('table', {staticClass: 'table-wrapper'}, [
      h('table-head', {
        on: {
          selectAll (colIdx, state) {
            self.allSelect = state;
          } 
        }
      }),
      h('table-body', {
        attrs: {
           allSelect: self.allSelect
        }
      })
    ]);
  }
}
