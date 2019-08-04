# Vue-Table-Form

Mobile side UI-library base on Vue.js

[![Build Status](https://travis-ci.org/reming0227/vue-table-form.svg?branch=master)](https://travis-ci.org/reming0227/atom-design) [![Version](https://img.shields.io/badge/npm-0.0.1-blue.svg)](https://www.npmjs.com/package/vue-table-form)

## 📦 Installation

```bash
npm install vue-table-from --save
yarn add vue-table-from
```

## 🔨 Usage
```html
<vue-table :data="list" :columns="columns"></vue-table>
```

```javascript
import VueTable from 'vue-table-from';
data: {
  // checkbox limit a one
  columns: [{
    type: 'checkbox',
    event: function checkEvent (selects) {
      console.log(selects);
    }
  },
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
    type: 'switch'
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
}
```

## 📃 License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Reming
