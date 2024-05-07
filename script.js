//ARRAY METHODS -DAY 7
//1. Solving problems using array functions on rest conuntries  data
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")//Making a Open request to the rest countries API
request.send();//sending request
request.onload =function()//status code =200
{
    var res = JSON.parse(request.response);
    //a.Get all the countries from Asia continent/region using Filter method
    var countries = res.filter(ele => ele.region === "Asia")
    console.log(`a.${countries.map(ele =>ele.name.common)}`);
  

    //b.Get all the countries with a population of less than 2 lakhs using Filter method
    var data_popu= res.filter(ele =>ele.population < 200000)
    // console.log(data_popu)
    for(var i=0;i<data_popu.length;i++)
    console.log(`${i+1}.Country Name: ${data_popu[i].name.common}`);//iterting and printing in a new line
    //console.log(`b. Country Name:\n[ ${data_popu.map(ele => ele.name.common)} ]`)//using map method
    console.log(`******************************`)



    // c.Print the following details name,capital,flag, using forEach method
    var details = res.forEach(ele => { 
        console.log(`Country Name:${ele.name.common},\nCapital:${ele.capital},\nFlag:${ele.flag}`)
    });



    //d. Print the total population of countries, using reduce method
    var population = res.reduce((acc,ele)=> acc + ele.population,0)
    console.log(`c.Total population: ${population}`)
    console.log(`******************************`)


    
    //e. Print the country that uses US dollors as currency.
     var currency = res.filter(ele=>ele.currencies)
     //console.log(currency)
     var country = res.filter(ele => ele.currencies && ele.currencies.USD)
     console.log(`d.Countries having US dollors:\n${country.map(ele=>ele.name.common)}`)
     console.log(`******************************`)

}
