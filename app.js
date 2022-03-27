let db = {};

const addToDb = (item) => {
    const existData = localStorage.getItem('setCart');
    if(existData){
        db = JSON.parse(existData)
    }


    if(item in db){
        db[item] = db[item] + 1
    }else{

        db[item] = 1;
    }
    localStorage.setItem('setCart', JSON.stringify(db))
    console.log(db);
}

const removeItem = (item) => {
    const existingData = localStorage.getItem('setCart')
    console.log(existingData);
    if(existingData){
        const removedData = JSON.parse(existingData);
        console.log(removedData);
        delete removedData[item];
        localStorage.setItem('setCart', JSON.stringify(removedData))
    }
}

