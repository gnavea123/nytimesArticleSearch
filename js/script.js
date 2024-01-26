//---
// inititalise Console.log()
console.log("Console log started:");
// parameters that will be needed:
// Search Term
// Number of Records to Retrieve
// Start Year
// End Year

// need DayJS for Date Format
//
// Display Top Articles

// https://api.nytimes.com/svc/search/v2/articlesearch.json?
// api-key=V1Z3RWPffGAmoVSNIxa8EkggWQQcG3mV
// &q=Richard+Branson
// &begin_date=20000101
// &end_date=20100101
// &page=2  Number of pages of articles
// &sort=oldest

var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var APIKey = "V1Z3RWPffGAmoVSNIxa8EkggWQQcG3mV";
var searchTerm = "Richard+Branson";
var pages = 2;
var sortOld = "oldest";
var begin = 20000101;
var end = 20100101;
var queryURL =
  baseURL +
  "api-key=" +
  APIKey +
  "&q=" +
  searchTerm +
  "&page=" +
  pages +
  "&sort=" +
  sortOld +
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

    var article = result.response.docs[0];
    console.log("article 0: ");
    console.log(article);

    // Create the  list group to contain the articles and add the article content for each
    var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#article-section").append($articleList);

    // If the article has a headline, log and append to $articleList
    var headline = article.headline.main;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");
    console.log("headline: ");
    console.log(article.headline.main);
    console.log($articleListItem);
    $articleListItem.append("<h5>Headline: " + headline + "</h5>");
    // --------
    // Article abstract details

    var abstract = article.abstract;
    $articleListItem.append("<h5>Abstract: " + abstract + "</h5>");

    //---Section Name for Article
    var section = article.section_name;
    console.log("Section Name: ");
    console.log(article.section_name);
    $articleListItem.append("<h5>Section: " + section + "</h5>");
    //const formattedDate = currentDate. format('YYYY-MM-DD
    // dayjs('2019-01-25').format('DD/MM/YYYY')
    ///---
    //====  Published Date converted to DayJS format
    var pubDate = dayjs(article.pub_date).format("DD/MM/YYYY");
    console.log(pubDate);
    $articleListItem.append("<h5> Published Date: " + pubDate + "</h5>");

    // Append the article
    $articleList.append($articleListItem);
    //$("#article-section").append(headline);
  });
