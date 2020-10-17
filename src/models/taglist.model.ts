const localStorageItemName = "XpensityTags"
type TagList = {
    data: string[];
    fetch: () => string[];
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
        if(this.data.indexOf(name)>=0){return "duplicated";}
        this.data.push(name);
        this.save();
        return "success";
    }
}

export default tagList;