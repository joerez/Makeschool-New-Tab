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


$('.slogan').on("mouseDown", function() {
  $('.slogan').addClass('woah pulse infinite');
})

$('.slogan').hover(
       function(){ $(this).addClass('woah pulse infinite') },
       function(){ $(this).removeClass('woah pulse infinite') }
)

$('.btn').hover(
       function(){ $(this).addClass('woah blazingStar') },
       function(){ $(this).removeClass('woah blazingStar') }
)

$('.quoteBox').hover(
       function(){ $(this).addClass('woah pulse') },
       function(){ $(this).removeClass('woah pulse') }
)
