import Store from '../store/index.js';
import tableCheckbox from '../checkbox/index.js';

export default {
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
                on: {
                  change (state) {
                    var msgs = Store.getState('data');
                    Store.commit('setEventMsg', idx, msgs);
                    self.$emit('selectAll', idx, state);
                    if (state) Store.getState('events')[idx](msgs); 
                    else Store.getState('events')[idx]([]); 
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
}
