<template>
  <div>
    <table id="ice">
      <thead>
        <tr>
          <td>药品名称</td>
          <td>规格</td>
          <td>生产厂家</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" @click="chooseList(index, tableData)" :class="{'red': currentLine === index}">
          <td>{{ item.name }}</td>
          <td>{{ item.spec }}</td>
          <td>{{ item.sccj }}</td>
        </tr>
      </tbody>
    </table>
    <table style="margin:20px 0;">
      <thead>
        <tr>
          <td>药品名称</td>
          <td>规格</td>
          <td>生产厂家</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in newArr">
          <td>{{ item.name }}</td>
          <td>{{ item.spec }}</td>
          <td>{{ item.sccj }}</td>
        </tr>
      </tbody>
    </table>
    <div id="editorElem" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
    <div style="width:100%;margin: 20px 0;height: 100px;"></div>
    <vue-editor id="editor"
      style="height: 300px;" v-model="htmlForEditor">
    </vue-editor>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  data () {
    return {
      tableData: [{
        name: '滴眼液',
        spec: '支/支',
        sccj: '北京制药厂',
        id: '2'
      }, {
        name: '感冒胶囊',
        spec: '盒/盒',
        sccj: '北京制药厂',
        id: '23'
      }, {
        name: '眼液',
        spec: '支/支',
        sccj: '北京制药厂',
        id: '22'
      }],
      newArr: [],
      currentCol: -1,
      currentLine: -1,
      editorContent: '',
      htmlForEditor: ''
    }
  },
  mounted: function () {
    let Edit = require('wangeditor')
    var editor = new Edit('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  },
  created: function () {
    let _this = this
      // 按键
    document.onkeydown = function (e) {
      e = window.event || e
      switch (e.keyCode) {
        case 37: // 左键
          _this.currentCol --
          _this.changeItem()
          break
        case 38: // 向上键
          _this.currentLine --
          _this.changeItem()
          break
        case 39: // 右键
          _this.currentCol ++
          _this.changeItem()
          break
        case 40: // 向下键
          _this.currentLine ++
          _this.changeItem()
          break
        default:
          break
      }
    }
  },
  methods: {
    getContent: function () {
      console.log(this.editorContent)
    },
    // 展示药品信息
    showTableData () {
    },
    // 选择
    chooseList (index, rows) {
      let _this = this
      let t = false
      if (_this.newArr.length > 0) {
        _this.newArr.forEach(function (item) {
          if (item.id === rows[index].id) {
            t = true
            return
          }
        })
        if (t) {
          alert('已存在')
          return false
        } else {
          _this.newArr.push(rows[index])
        }
      } else {
        _this.newArr.push(rows[index])
      }
    },
    // 方向键调用
    changeItem () {
      let _this = this
      // 当前索引_this.currentLine
      if (_this.currentLine * 1 + 1 > _this.tableData.length) {
        _this.currentLine = _this.tableData.length * 1 - 1
      }
      if (_this.currentLine === -1) {
        _this.currentLine = 0
      }
      console.log(_this.currentLine)
      _this.chooseList(_this.currentLine, _this.tableData)
    },
    // -->
    handleImageAdded: function (file, Editor, cursorLocation) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData()
      formData.append('image', file)

      this.$ajax({
        url: 'https://fakeapi.yoursite.com/images',
        method: 'POST',
        data: formData
      })
      .then((result) => {
        let url = result.data.url // Get url from response
        Editor.insertEmbed(cursorLocation, 'image', url)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    VueEditor
  }
}
</script>
<style>
  table, tr, td {
    border: 1px solid #eeeeee;
  }
  table {
    width: 500px;
  }
  .red, table:first-child tr:hover {
    background: red;
    color: #ffffff;
  }
</style>
