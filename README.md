# Vue-Table-Form

Mobile side UI-library base on Vue.js

[![Build Status](https://travis-ci.org/reming0227/vue-table-form.svg?branch=master)](https://travis-ci.org/reming0227/vue-table-form) [![Version](https://img.shields.io/badge/npm-0.0.3-blue.svg)](https://www.npmjs.com/package/vue-table-form)

## 📦 Installation

```bash
npm install vue-table-from --save
yarn add vue-table-from
```

## 🔨 Usage
```html
<vue-table :data="list" :columns="columns" :select_event="event"></vue-table>
```

```javascript
import VueTable from 'vue-table-from';
new Vue({
  data: {
    columns: [
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '性别',
      key: 'sex'
    },
    {
      title: '国籍',
      key: 'country'
    },
    {
      title: '授权',
      key: 'select',
      type: 'switch',
      event: function (state, row) {
        console.log(state, row);
      }
    }],
    list: [{
      name: 'Reming',
      age: 23,
      sex: '男',
      country: '中国'
    },
    {
      name: 'Reming',
      age: 23,
      sex: '男',
      country: '中国'
    },
    {
      name: 'Reming',
      age: 23,
      sex: '男',
      country: '中国'
    },
    {
      name: 'Reming',
      age: 23,
      sex: '男',
      country: '中国'
    },
    {
      name: 'Reming',
      age: 23,
      sex: '男',
      country: '中国'
    }]
  },
  components: {
    VueTable
  },
  methods: {
    event (selects) {
      console.log(selects);
    }
  }
})
```

## 📃 License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Reming
