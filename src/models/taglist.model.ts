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
    }
}

export default tagList;