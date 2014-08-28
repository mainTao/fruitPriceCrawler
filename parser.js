var cheerio = require('cheerio');

var parse = function(body){
    var $ = cheerio.load(body);
    var str = '';
    var $cells = $('.pri_list ul').eq(1).find('li');
    $cells.each(function(index){
        str += $(this).text().trim();
        if((index + 1) % 7 === 0){
            str += '\n';
        }
        else{
            str += '|';
        }
    });

    if(str.length > 1000){ // success
        return str;
    }
    else{ // error
        return -1;
    }
};

exports.parse = parse;