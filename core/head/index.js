import Store from '../store/index.js';
import tableCheckbox from '../checkbox/index.js';

export default {
  name: 'table-head',
  props: {
    selectState: {
      type: Number,
      default: -1
    }
  },
  components: {
    tableCheckbox
  },
  render (h) {
    var self = this;
    var headCells = [];
    var types = Store.getState('types');
    Store.getState('titles').forEach(function (title, idx) {
      switch (types[idx]) {
        case 'checkbox':
          headCells.push(h('th', {staticClass: 'table-head-cell'}, [
            h('table-checkbox', {
              attrs: {
                value: self.selectState === 1,
                stateZero: self.selectState === 0
              },
              on: {
                change (state) {
                  var msgs = JSON.parse(JSON.stringify(Store.getState('data')));
                  if (self.selectState === 0 && state) {
                    self.$emit('selectAll', false);
                    // fix uneffect full-select
                    setTimeout(function () {self.$emit('selectAll', state);});
                  } else self.$emit('selectAll', state);
                  var selectFn = Store.getState('selectFn');
                  if (state) {
                    Store.commit('setSelectMsg', msgs);
                    selectFn(msgs);
                  } else {
                    Store.commit('setSelectMsg', null);
                    selectFn([]);
                  } 
                }
              }
            })
          ]));
          break;
        default:
          headCells.push(h('th', {staticClass: 'table-head-cell'}, title));
      }
    });
    return h('thead', {staticClass: 'table-head'}, [
      h('tr', {}, headCells)
    ]);
  }
};
