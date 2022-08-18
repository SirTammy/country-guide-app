let searchBtn = document.querySelector('#searchBtn')

let countryInp = document.querySelector('#countryInp');

searchBtn.addEventListener('click', async() => {
    try{let countryName = countryInp.value;
    let final = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        console.log(final.data[0]);
        console.log(final.data[0].capital[0]);
        console.log(final.data[0].flags.svg);
        console.log(final.data[0].name.common);
        console.log(final.data[0].continents[0]);
        console.log(final.data[0].population)
      
        let currencyObj = final.data[0].currencies;
        console.log(Object.keys(currencyObj)[0])
        console.log(currencyObj[Object.keys(currencyObj)].name)

        let languageObj = final.data[0].languages
        console.log(Object.values(languageObj).toString().split(",").join(", ") );


        result.innerHTML = `
        <img src= "${final.data[0].flags.svg}" class="flagImg">
        <h2>${final.data[0].name.common}</h2>

        <div class="wrapper">
            <div class="dataWrapper">
                <h4>Capital: </h4>
                <span> ${final.data[0].capital[0]}</span>

            </div>
        </div>

        <div class="wrapper">
            <div class="dataWrapper">
                <h4>Continent: </h4>
                <span> ${final.data[0].continents[0]}</span>

            </div>
        </div>

        <div class="wrapper">
            <div class="dataWrapper">
                <h4>Population: </h4>
                <span> ${final.data[0].population}</span>

            </div>
        </div>

        <div class="wrapper">
        <div class="dataWrapper">
            <h4>Currency: </h4>
            <span> ${currencyObj[Object.keys(currencyObj)].name} - ${Object.keys(currencyObj)[0]} </span>
        </div>
    </div>

    <div class="wrapper">
            <div class="dataWrapper">
                <h4>Common Language(s): </h4>
                <span> ${Object.values(languageObj).toString().split(",").join(", ")}</span>

            </div>
        </div>
        `
    } 
    catch{
        if(countryInp.value === ""){
            result.innerHTML = `<h3 class="errorMsg">The input field cannot be empty</h3>`
        } else {
            result.innerHTML = `<h3 class="errorMsg">Please enter a valid country name</h3>`
        }
    }

})