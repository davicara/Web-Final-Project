const categories = ["wisdom", "philosophy", "life", "truth", "inspirational", "relationships", "love", "faith", "humor", "success", "courage", "happiness", "art", "writing", "fear", "nature", "time", "freedom", "death", "leadership"];

async function FetchData(apiSlug) {
  try {
    const response = await fetch(apiSlug, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'Icc2FzWoNpPhhfIVmabkQbKFC8Z78xYUIVJi0rhl'
        }
    });
    
    if (!response.ok) {
      alert(`HTTP error! Status: ${response.status}`) ;
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    alert(`Error fetching data:' ${error}`);
  }

}

document.addEventListener("DOMContentLoaded", () => {

    let dataForAPI = document.getElementById("api_data");
    let currentAPI = null;

    const submitForm = document.getElementById("submit");
    const password_check = document.getElementById("password");
    const quotes_check = document.getElementById("quote");
    const output = document.getElementById("results");

    submitForm.addEventListener("submit", async Event => {
        Event.preventDefault();
        if (currentAPI === 'Quotes'){
            let apiSlug = 'https://api.api-ninjas.com/v2/randomquotes';
            if (dataForAPI.value != null) {
                if (categories.includes(dataForAPI.value)){
                    apiSlug += "?categories="+dataForAPI.value;
                }
            }

            let data = await FetchData(apiSlug);

            console.log(data[0].quote);
            output.textContent = data[0].quote;
        } else if (currentAPI === 'Password') {
            let apiSlug = 'https://api.api-ninjas.com/v1/passwordgenerator';
            if (dataForAPI.value != null) {
                if (Number.isFinite(Number(dataForAPI.value))){
                    apiSlug += "?length="+dataForAPI.value;
                }
            }

            let data = await FetchData(apiSlug);

            console.log(data.random_password);
            output.textContent = data.random_password;
        }
    });

    password_check.addEventListener("change", async Event => {

        if (event.target.checked) {
            if (quotes_check.checked) {
                quotes_check.checked = false;
            }

            currentAPI = "Password";
        }  else {
            currentAPI = null;
        }

    });

    quotes_check.addEventListener("change", Event => {

        if (event.target.checked) {
            if (password_check.checked) {
                password_check.checked = false;
            }

            currentAPI = "Quotes";
        } else {
            currentAPI = null;
        }

    });


});
