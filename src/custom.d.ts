type Statement = {
    tag: string;
    comment: string;
    type: string;
    amount: number;
    createdAt: Date | undefined;
}

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
interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: (id: string, newTagName: string) => "success" | "not found" | "duplicated";
    findTag: (id: string) => Tag;
}