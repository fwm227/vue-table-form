# Vue-Table-Form

Mobile side UI-library base on Vue.js

[![Build Status](https://travis-ci.org/reming0227/vue-table-form.svg?branch=master)](https://travis-ci.org/reming0227/vue-table-form) [![Version](https://img.shields.io/badge/npm-1.0.2-blue.svg)](https://www.npmjs.com/package/vue-table-form)

## 📦 Installation

```bash
npm install vue-table-form --save
yarn add vue-table-form
```

## 🔨 Usage
```html
<vue-table :data="list" :columns="columns" :select_event="event"></vue-table>
```

```javascript
import 'vue-table-form/lib/style.css';
import VueTable from 'vue-table-form';
new Vue(
  data: {
    columns: [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Sex',
      key: 'sex'
    },
    {
      title: 'Country',
      key: 'country'
    },
    {
      title: 'Authority',
      key: 'select',
      type: 'switch',
      event: function (state, row) {
        console.log(state, row);
      }
    }],
    list: [{
      name: 'Row',
      age: 'xxx',
      sex: 'Male',
      country: 'China',
      switch: {
        color: 'red',
        value: true
      }
    },
    {
      name: 'Row',
      age: 'xxx',
      sex: 'Male',
      country: 'China',
      switch: {
        color: 'purple',
        value: false
      }
    },
    {
      name: 'Row',
      age: 'xxx',
      sex: 'Male',
      country: 'China',
      switch: {
        color: 'yellow',
        value: false
      }
    },
    {
      name: 'Row',
      age: 'xxx',
      sex: 'Male',
      country: 'China',
      switch: {
        color: 'green',
        value: false
      }
    },
    {
      name: 'Row',
      age: 'xxx',
      sex: 'Male',
      country: 'China',
      switch: {
        color: '#108ee9',
        value: true
      }
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

## 🎬 Preview

[![](https://raw.githubusercontent.com/reming0227/vue-table-form/master/docs/vuetable.gif)](https://raw.githubusercontent.com/reming0227/vue-table-form/master/docs/vuetable.gif)

## 📃 License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Reming
