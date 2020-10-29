import axios from 'axios'
import {API_LINK} from "./config";

const information = {
    namespaced : true,
    state : {
        information : []
    },
    mutations : {
        SET_INFORMATION(state,data){
            state.information = data
        }
    },
    actions : {
        loadInformation({commit}){
            axios.get(API_LINK)
                .then(res => {
                    commit("SET_INFORMATION", res.data)
                }).catch(error => console.log(error))
        }
    }
}
export default information