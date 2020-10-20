import statementStore from "@/store/statementStore";
import tagStore from "@/store/tagStore";

const store = {
  ...statementStore,
  ...tagStore
}

export default store;