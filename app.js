let db = {};

const addToDb = (item) => {
    const existData = localStorage.getItem(db)
    if(existData){
        db = JSON.parse(db)
    }


    if(item in db){
        db[item] = db[item] + 1
    }else{

        db[item] = 1;
    }
    localStorage.setItem('setCart', JSON.stringify(db))
    console.log(db);
}


addToDb('kalu')
addToDb('lalu')
addToDb('kalu')
addToDb('milu')
addToDb('kalu')