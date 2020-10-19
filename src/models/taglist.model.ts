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
    remove: (id: string) => boolean;
}
import generateId from "@/library/generateId";

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
        const id = generateId().toString();
        this.data.push({id: id, name: name});
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
    },
    remove(id){
        let index = -1;
        for(let i = 0; i< this.data.length; i++){
            if(this.data[i].id === id){
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
}

export default tagList;