import Vue from "vue";
import Component from "vue-class-component";

@Component
export class TagHelper extends Vue{
    createTag(){
        const tagName = window.prompt("New Tag Name");
        if(tagName){
            this.$store.commit("createTag", tagName);
        }else{
            window.alert("Tag Name Cannot Be Empty")
        }
    }
}