import tableSwitch from '../switch/index.js';
import tableCheckbox from '../checkbox/index.js';
import Store from '../store/index.js';

export default {
  name: 'table-row',
  data () {
    return {
      checkbox_val: false
    };
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
    var keys = Store.getState('keys');
    var rowDatas = Store.getState('data');
    keys.forEach(function (key, colIdx) {
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
                  self.$emit('checkbox_change', state);
                }
              }
            })
          ]));
          break;
        case 'switch':
          var switchBtn = rowDatas[self.rowIdx].switch;
          tableCells.push(h('td', {staticClass: 'table-cell'}, [
            h('table-switch', {
              attrs: {
                value: switchBtn ? switchBtn.value : false,
                color: switchBtn ? switchBtn.color : '#108ee9'
              },
              on: {
                change: function (state) {
                  Store.getState('switchEvents')[colIdx](state, self.data);
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
};
