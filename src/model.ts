const localStorageItemName = "XpensityStatements"
const model = {
    cloneStatement(data: Statement | Statement[]){
        return JSON.parse(JSON.stringify(data))
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageItemName)||"[]") as Statement[]

    },
    save(data: Statement){
        return window.localStorage.setItem(localStorageItemName, JSON.stringify(data))
    }
}

export default model;