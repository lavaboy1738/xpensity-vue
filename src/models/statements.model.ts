import clone from "@/library/clone";

const localStorageItemName = "XpensityStatements"
const statementList = {
    data: [] as Statement[],
    fetch(){
        this.data = JSON.parse(window.localStorage.getItem(localStorageItemName)||"[]") as Statement[]
        return this.data;
    },
    create(statement: Statement){
        const statementClone = clone(statement);
        statementClone.createdAt = new Date();
        this.data.push(statementClone);
    },
    save(){
        return window.localStorage.setItem(localStorageItemName, JSON.stringify(this.data))
    }
}

export default statementList;