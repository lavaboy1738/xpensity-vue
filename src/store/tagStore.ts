import generateId from "@/library/generateId";

const localStorageItemName = "XpensityTags"

const tagStore = {
      //tag store
  tagList: [] as Tag[],
  fetchTags(){
      this.tagList = JSON.parse(window.localStorage.getItem(localStorageItemName)||"[]")
      return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter(tag=> tag.id === id)[0]
  },
  createTag(tagName: string) {
    const names = this.tagList.map(item => item.name);
    if(names.indexOf(tagName)>=0){
        window.alert("Duplicated Tag Name")
        return "duplicated"
    }
    const id = generateId().toString();
    this.tagList.push({id: id, name: tagName});
    this.saveTags();
    window.alert("Success")
    return "success"
  },
  removeTag(id: string){
    let index = -1;
    for(let i = 0; i< this.tagList.length; i++){
        if(this.tagList[i].id === id){
            index = i;
            break;
        }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  },
  updateTag(id: string, newTagName: string){
    const idList = this.tagList.map(item=> item.id);
    if(idList.indexOf(id)>=0){
        const nameList = this.tagList.map(item=> item.name);
        if(nameList.indexOf(newTagName) >= 0){
            return "duplicated"
        }else{
            const tag = this.tagList.filter(item=> item.id === id)[0];
            tag.name = newTagName;
            this.saveTags();
            return "success"
        }
    }else{
        return "not found"
    }
  },
  saveTags(){
    window.localStorage.setItem(localStorageItemName, JSON.stringify(this.tagList))
  }
}

tagStore.fetchTags();

export default tagStore;