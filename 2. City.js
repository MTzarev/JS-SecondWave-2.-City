function city (object){

for (let info of Object.entries(object)){
    console.log(info.join(` -> `));
    
}

}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
