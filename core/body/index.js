import Store from '../store/index.js';
import tableRow from '../row/index.js';

var _selectMsg = Store.getState('selectMsg');

export default {
  name: 'table-body',
  data () {
    return {
      selectMsg: _selectMsg
    }
  },
  props: {
    allSelect: {
      type: Boolean,
      default: false
    }
  },
  components: {
    tableRow
  },
  render (h) {
    var self = this;
    var tableRows = [];
    var allSelectState = -1;
    Store.getState('data').forEach(function (row, rowIdx) {
      tableRows.push(h('table-row', {
        attrs: {
          data: row,
          rowIdx: rowIdx,
          msgs: self.selectMsg,
          allSelect: self.allSelect
        },
        on: {
          checkbox_change (state) {
            // push row that was selected into array
            var msgs = Store.getState('selectMsg');
            if (state) msgs.splice(rowIdx, 1, row);
            else msgs.splice(rowIdx, 1, void 0);
            Store.commit('setSelectMsg', msgs);
            var filterMsgs = msgs.filter(function (msg) {
              if (msg !== void 0) return msg;
            });
            if (filterMsgs.length >= Store.getState('rowLength')) allSelectState = 1;
            else if (filterMsgs.length > 0) allSelectState = 0;
            else allSelectState = -1;
            self.$emit('setSelectAllState', allSelectState);
            Store.getState('selectFn')(filterMsgs);
          }
        }
      }));
    });
    return h('tbody', {}, tableRows);
  }
};
