//---
// inititalise Console.log()
console.log("Console log started:");
// parameters that will be needed:
// Search Term
// Number of Records to Retrieve
// Start Year
// End Year

// Display Top Articles

// https://api.nytimes.com/svc/search/v2/articlesearch.json?
// api-key=V1Z3RWPffGAmoVSNIxa8EkggWQQcG3mV
// &q=Richard+Branson
// &begin_date=20000101
// &end_date=20100101

var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var APIKey = "V1Z3RWPffGAmoVSNIxa8EkggWQQcG3mV";
var searchTerm = "Richard+Branson";
var begin = 20000101;
var end = 20100101;
var queryURL =
  baseURL +
  "api-key=" +
  APIKey +
  "&q=" +
  searchTerm +
  "&begin_date=" +
  begin +
  "&end_date=" +
  end;

console.log(queryURL);

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    //
    //

    console.log(result);
  });
