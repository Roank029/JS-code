let calculate = document.querySelector('form')
calculate.addEventListener("submit", function (e) {
    e.preventDefault();


    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height==="" || height < 0 || isNaN(height)) {
        results.innerHTML = `Plese Enter Right Height ${height}`
    }
    else if (weight==="" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Plese Enter Right weight ${weight}`
    }
    else{
         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});


