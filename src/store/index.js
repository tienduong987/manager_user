import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const storeData={
  state:{
        tableData: [{
            id: 1,
            name: 'Nguyễn Văn A',
            position: 'Giám đốc',
            unit:'Hà Nội'
            }, {
            id: 2,
            name: 'Trần Văn B',
            position: 'FrontEnd Developer',
            unit:'Hà Nội'
            },  {
            id: 3,
            name: 'Nguyễn Văn C',
            position: 'BackEnd Deverloper',
            unit:'HCM'
            },  {
            id: 4,
            name: 'Đăng Thị D',
            position: 'BackEnd Deverloper',
            unit:'HCM'
            }, 
            
        ],
        
    },
    getters: {
        
        },
    mutations: {
        // DELETE_EMPLOYEE: (state ,employeeId) => {
        //      state.tableData.splice()
        // },
        
    },
    actions:{
        // deleteEmployee({commit},employeeId){
        //     commit('DELETE_EMPLOYEE',employeeId)
        // }
    }
   

 }
  

const store = new Vuex.Store(storeData)
export default store