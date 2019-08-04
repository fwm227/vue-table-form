import tableSwitch from '../switch/index.js';
import tableCheckbox from '../checkbox/index.js';
import Store from '../store/index.js';

var colEventMsg = Store.getState('colEventMsg');

export default {
  name: 'table-row',
  data () {
    return {
      checkbox_val: false,
      switch_val: false
    }
  },
  mounted () {
    var self = this;
    // register react-props for update view
    Object.defineProperty(Store.state, 'colEventMsg', {
      get () {
        return colEventMsg;
      },
      set (msg) {
        self.$forceUpdate();
      }
    });
  },
  watch: {
    checkbox_val: function (state) {
    }
  },
  props: {
    isHead: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: function () {
        return {};
      }
    },
    allSelect: {
      type: Boolean,
      default: false
    },
    // row index
    rowIdx: Number
  },
  components: {
    tableSwitch,
    tableCheckbox
  },
  render (h) {
    var self = this;
    var tableCells = [];
    var types = Store.getState('types');
    var colEventMsg = Store.getState('colEventMsg');
    Store.getState('keys').forEach(function (key, colIdx) {
      switch (types[colIdx]) {
        case 'text':
          tableCells.push(h('td', {staticClass: 'table-cell'}, self.data[key]));
        break;
        case 'checkbox':
          tableCells.push(h('td', {staticClass: 'table-cell'}, [
            h('table-checkbox', {
              attrs: {
                value: self.allSelect
              },
              on: {
                change: function (state) {
                  self.checkbox_val = state;
                  self.$emit('checkbox_change', colIdx, state, self.data);
                }
              }
            })
          ]));
        break;
        case 'switch':
          tableCells.push(h('td', {staticClass: 'table-cell'}, [
            h('table-switch', {
              domProps: {
                checked: self.switch_val
              },
              on: {
                change: function (val) {
                  
                }
              }
            })
          ]));
        break;
      }
    });
    return h('tr', {
      staticClass: 'table-row'
    }, tableCells);
  }
}