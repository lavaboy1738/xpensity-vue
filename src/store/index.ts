import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/library/clone";

Vue.use(Vuex)

const localStorageItemName = "XpensityStatements"

const store = new Vuex.Store({
  state: {
    statementList: [] as Statement[],
    tagList: [] as Tag[]
  },
  mutations: { 
      fetchStatements(state){
        state.statementList = JSON.parse(window.localStorage.getItem(localStorageItemName)||"[]") as Statement[];
      },
      createStatement(state, statement: Statement){
        const statementClone = clone(statement);
        statementClone.createdAt = new Date();
        state.statementList.push(statementClone);
        store.commit("saveStatements", state);
      },
      saveStatements(state){
        window.localStorage.setItem(localStorageItemName, JSON.stringify(state.statementList))
    }
  }
})


export default store;
