let db = {};

const addToDb = (item) => {
    if(db[item]){
        db[item] = db[item] + 1
    }
    db[item] = 1;
    console.log(db);
}


addToDb('linda')
addToDb('pinda')
addToDb('ginda')
addToDb('linda')
