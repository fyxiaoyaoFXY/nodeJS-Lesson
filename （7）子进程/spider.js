const cheerio=require("cheerio");

const $=cheerio.load("<ul><li>li node</li></ul>");

$("ul").append("<li>li node 2</li>");

$("li").each(function(index,el){
    console.log($(this).text());
})
console.log($.html);





