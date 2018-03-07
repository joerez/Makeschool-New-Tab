$(function(){
var url = "http://quotes.rest/qod.json";
var quote = $("#quoteblock");// the id of the heading
$.get(url, function (data) {
var the_quote = data;
quote.text(the_quote.contents.quotes[0].quote);
var author = $("#author");// id of author
author.text(the_quote.contents.quotes[0].author);
});
});
