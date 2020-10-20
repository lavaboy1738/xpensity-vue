import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/library/clone";
import generateId from "@/library/generateId";

Vue.use(Vuex)

const storageStatementName = "XpensityStatements";
const storageTagName = "XpensityTags";

const store = new Vuex.Store({
  state: {
    statementList: [] as Statement[],
    tagList: [] as Tag[]
  },
  mutations: { 
      fetchStatements(state){
        state.statementList = JSON.parse(window.localStorage.getItem(storageStatementName)||"[]") as Statement[];
      },
      createStatement(state, statement: Statement){
        const statementClone = clone(statement);
        statementClone.createdAt = new Date();
        state.statementList.push(statementClone);
        store.commit("saveStatements", state);
      },
      saveStatements(state){
        window.localStorage.setItem(storageStatementName, JSON.stringify(state.statementList))
      },
      fetchTags(state){
        state.tagList = JSON.parse(window.localStorage.getItem(storageTagName)||"[]")
      },
      createTag(state, tagName: string) {
        const names = state.tagList.map(item => item.name);
        if(names.indexOf(tagName)>=0){
            window.alert("Duplicated Tag Name")
            return "duplicated"
        }
        const id = generateId().toString();
        state.tagList.push({id: id, name: tagName});
        store.commit("saveTags", state);
        window.alert("Success")
        return "success"
      },
      saveTags(state){
        window.localStorage.setItem(storageTagName, JSON.stringify(state.tagList))
      }
  }
})


export default store;
