import tagList from "../models/taglist.model";
import statementList from "../models/taglist.model";

const store = {
    //statements store
  statementList: statementList.fetch(),
  createStatement: (statement: Statement) => {
    statementList.create(statement)
  },

  //tag store
  tagList: tagList.fetch(),
  findTag(id: string) {
    return this.tagList.filter(tag=> tag.id === id)[0]
  },
  createTag: (tagName: string) => {
    const message = tagList.create(tagName);
    if (message === "duplicated") {
      window.alert("Duplicated Tag Name");
    } else if (message === "success") {
      window.alert("Success")
    }
  },
  removeTag: (id: string) => {
    return tagList.remove(id);
  },
  updateTag: (id: string, newTagName: string) => {
    return tagList.update(id, newTagName);
  }
}

export default store;