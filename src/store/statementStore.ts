import clone from "@/library/clone";

const localStorageItemName = "XpensityStatements"

const statementStore = {        //statements store
    statementList: [] as Statement[],
    fetchStatements(){
        this.statementList = JSON.parse(window.localStorage.getItem(localStorageItemName)||"[]") as Statement[];
        return this.statementList;
    },
    saveStatements(){
        window.localStorage.setItem(localStorageItemName, JSON.stringify(this.statementList))
    },
    createStatement(statement: Statement){
        const statementClone = clone(statement);
        statementClone.createdAt = new Date();
        this.statementList && this.statementList.push(statementClone);
        statementStore.saveStatements();
  }
}

statementStore.fetchStatements();

export default statementStore;