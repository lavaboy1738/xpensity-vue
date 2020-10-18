const localStorageItemName = "XpensityTags"
type Tag = {
    id: string;
    name: string;
}
type TagList = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => "success" | "duplicated";
    save: () => void;
    update: (id: string, name: string) => "success" | "not found" | "duplicated";
}
const tagList: TagList = {
    data: [],
    fetch(){
        this.data = JSON.parse(window.localStorage.getItem(localStorageItemName)||"[]")
        return this.data;
    },
    save(){
        window.localStorage.setItem(localStorageItemName, JSON.stringify(this.data))
    },
    create(name){
        //this.data = [{id: "1", name:"foo"}, {id: "2", name: "bar"}]
        const names = this.data.map(item => item.name);
        if(names.indexOf(name)>=0){return "duplicated";}
        this.data.push({id: name, name: name});
        this.save();
        return "success";
    },
    update(id, newName){
        const idList = this.data.map(item=> item.id);
        if(idList.indexOf(id)>=0){
            const nameList = this.data.map(item=> item.name);
            if(nameList.indexOf(newName) >= 0){
                return "duplicated"
            }else{
                const tag = this.data.filter(item=> item.id === id)[0];
                tag.name = newName;
                this.save();
                return "success"
            }
        }else{
            return "not found"
        }
    }
}

export default tagList;