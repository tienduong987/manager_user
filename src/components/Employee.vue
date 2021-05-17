<template>
  <div>
    <!-- start form thêm nhân viên -->
    <div>
      <p><el-input v-model="search" style="width:500px" placeholder="Nhập tìm kiếm"/> </p>
      <el-button
        type="success"
        icon="el-icon-circle-plus"
        style="margin-bottom: 10px"
        @click="(dialogVisible = true)"
        >Thêm Nhân viên</el-button
      >
      <el-dialog
        title="Thêm nhân viên"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <span>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Họ và Tên">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Chức vụ">
              <el-input v-model="form.position"></el-input>
            </el-form-item>
            <el-form-item label="Đơn vị">
              <el-input v-model="form.unit"></el-input>
            </el-form-item>
          </el-form>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="(dialogVisible = false), clickCancel()"
            >Cancel</el-button
          >
          <el-button
            type="primary"
            @click="(dialogVisible = false), clickSave(form)"
            >Save</el-button
          >
        </span>
      </el-dialog>
    </div>
    <!-- end form nhân viên -->
    <!-- Đổ dữ liệu ra form -->
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%" empty-text='Không có dữ liệu'>
      <el-table-column label="#" width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Nhân viên" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span size="medium">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Chức vụ" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.position }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Đơn vị" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.unit }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Tác vụ">
        <template slot-scope="scope">
          <el-button
            type="warning"
            @click="handleEdit(scope.row), (dialogVisible = true)"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row.id)"
            icon="el-icon-delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
        <div slot="append" v-if="tableData.length=='0'">Chưa có nhân viên nào</div>
    </el-table>
    <!-- end đổ dữ liệu ra form -->
  </div>
</template>

<script>
export default {
  name: "employee",
  data() {
    return {
      search: '',
      dialogVisible: false,
      tableData: [],
      form: {
        id: Math.floor(Math.random() * 1000000),
        name: "",
        position: "",
        unit: "",
      },
    };
  },
  mounted() {
    this.tableData = this.$store.state.tableData;
    var dataString = localStorage.getItem('manager_employee')
    // this.employeeList = JSON.parse(localStorage.getItem('employeeList'))
    if(dataString){
      this.tableData=JSON.parse(dataString)
    }else{
      this.tableData=[]
    }
  },
  methods: {
    handleEdit(data) {
      this.form = {
        id: data.id,
        name: data.name,
        position: data.position,
        unit: data.unit,
      };
    },
    handleDelete(row) {
      this.tableData.splice(row,1)
      // this.$store.dispatch('deleteEmployee',row.id)
      // console.log(row.id)
      // return this.$store.commit('DELETE_EMPLOYEE',row)
      localStorage.setItem('manager_employee',JSON.stringify(this.tableData))
    },
    clickCancel() {
      this.form = {
        id: Math.floor(Math.random() * 1000000),
        name: "",
        position: "",
        unit: "",
      };
    },
    clickSave(data) {
      let index= this.tableData.findIndex(item =>item.id == data.id)
      if(index >=0){
        this.tableData.splice(index,1,data)
        localStorage.setItem('manager_employee',JSON.stringify(this.tableData))
      }else {
        this.tableData.push(data);
        this.form = {
          id: Math.floor(Math.random() * 1000000),
          name: "",
          position: "",
          unit: "",
        }
        localStorage.setItem('manager_employee',JSON.stringify(this.tableData))
      }
    },
    
  }
}
</script>

<style>

</style>