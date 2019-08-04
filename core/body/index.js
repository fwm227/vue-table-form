import Store from '../store/index.js';
import tableRow from '../row/index.js';

var _colEventMsg = Store.getState('colEventMsg');

export default {
  data () {
    return {
      eventMsg: _colEventMsg
    }
  },
  props: {
    allSelect: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    var self = this;
    // register react-props for update view
    // Object.defineProperty(Store.state, 'colEventMsg', {
    //   get () {
    //     return _colEventMsg;
    //   },
    //   set () {}
    // });
  },
  components: {
    tableRow
  },
  render (h) {
    var self = this;
    var tableRows = [];
    Store.getState('data').forEach(function (row, rowIdx) {
      tableRows.push(h('table-row', {
        attrs: {
          data: row,
          rowIdx: rowIdx,
          msgs: self.eventMsg,
          allSelect: self.allSelect
        },
        on: {
          checkbox_change (colIdx, state, info) {
            // push row that was selected into array
            var msgs = Store.getState('colEventMsg')[colIdx] || Array.apply(null, {length: Store.getState('rowLength')});
            if (state) msgs.splice(info.key, 1, info);
            else msgs.splice(info.key, 1, void 0);
            Store.commit('setEventMsg', colIdx, msgs);
            var filterMsgs = msgs.filter(function (msg) {
              if (msg !== void 0) return msg;
            });
            Store.getState('events')[colIdx](filterMsgs);
          }
        }
      }));
    });
    return h('tbody', {}, tableRows);
  }
};
