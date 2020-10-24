import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import clone from "@/library/clone";
import generateId from "@/library/generateId";

Vue.use(Vuex)

const storageStatementName = "XpensityStatements";
const storageTagName = "XpensityTags";

type RootState = {
  statementList: Statement[];
  tagList: Tag[];
  currentTag?: Tag;
}

const store = new Vuex.Store({
  state: {
    statementList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
      fetchStatements(state){
        state.statementList = JSON.parse(window.localStorage.getItem(storageStatementName)||"[]") as Statement[];
      },
      createStatement(state, statement: Statement){
        const statementClone: Statement = clone(statement);
        statementClone.createdAt = new Date().toISOString();
        state.statementList.push(statementClone);
        store.commit("saveStatements", state);
        window.alert("Success");
      },
      saveStatements(state){
        window.localStorage.setItem(storageStatementName, JSON.stringify(state.statementList))
      },
      fetchTags(state){
        state.tagList = JSON.parse(window.localStorage.getItem(storageTagName)||"[]")
      },
      setCurrentTag(state, id: string){
        state.currentTag = state.tagList.filter(tag=> tag.id === id)[0];
      },
      createTag(state, tagName: string) {
        const names = state.tagList.map(item => item.name);
        if(tagName.includes(" ")){
            window.alert("No Spaces Allowed")
            return
        }else if(names.indexOf(tagName)>=0){
            window.alert("Duplicated Tag Name")
        }
        const id = generateId().toString();
        state.tagList.push({id: id, name: tagName});
        store.commit("saveTags", state);
        window.alert("Success")
      },
      updateTag(state, payload: Tag){
        const id = payload.id;
        const newTagName = window.prompt("New Tag Name");
        const idList = state.tagList.map(item=> item.id);
        if(newTagName){
            if(idList.indexOf(id)>=0){
              const nameList = state.tagList.map(item=> item.name);
              if(nameList.indexOf(newTagName) >= 0){
                  window.alert("Duplicated Tag Name")
              }else{
                  const tag = state.tagList.filter(item=> item.id === id)[0];
                  tag.name = newTagName;
                  store.commit("saveTags", state);
                  window.alert("Success")
              }
          }else{
              window.alert("Not Found")
          }
        }else{
          window.alert("Tag Name Cannot Be Empty");
        }
      },
      saveTags(state){
        window.localStorage.setItem(storageTagName, JSON.stringify(state.tagList))
      },
      removeTag(state, id: string){
        let index = -1;
        for(let i = 0; i< state.tagList.length; i++){
            if(state.tagList[i].id === id){
                index = i;
                break;
            }
        }
        if(index >= 0){
          state.tagList.splice(index, 1);
          store.commit("saveTags", state);
          window.alert("Tag Removed");
          router.replace("/tags");
        }else{
          window.alert("Deletion Failed");
        }
      }
  }
})


export default store;
