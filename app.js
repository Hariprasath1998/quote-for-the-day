// Project Started on December 9th


const today = getDay();
getAPI('https://type.fit/api/quotes', today);

function getDay() {
    // Using December 9 as first day

    let start = new Date("Dec 09, 2020 00:00:00");
    let current = new Date();
    // console.log(start.getTime());
    // console.log(current.getTime());
    let diff = current.getTime() - start.getTime();
    // console.log(diff);
    day = Math.floor(diff / 86400000);
    // console.log(day);
    return day;
}


// Fetching quotes
function getAPI(site, index) {
    fetch(site)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            // console.log(data[index].text);
            // console.log(data[index].author);

            let quote = data[index].text;
            let author = data[index].author;
            let output = `
            <h3>${quote}</h3>
            <h5 class="author">-${author}</h5>
            `
            document.getElementById('output').innerHTML = output;
        }).catch(function(err) {
            // console.log(err);
        })
}