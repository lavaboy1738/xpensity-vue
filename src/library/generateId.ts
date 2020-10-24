
let id: number = parseInt(window.localStorage.getItem("XpensityID") || "0") || 0;

function generateId(){
    id ++
    window.localStorage.setItem("XpensityID", id.toString());
    return id;
}

export default generateId