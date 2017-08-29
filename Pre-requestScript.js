/**
 * Created by qtzznn on 30/08/2017.
 */
var languageCode = 'vi';
//for name data
var variables = ['name','phone','boolYesNo','datetime','numberRandom'];
variables.forEach(function(item, index){
    //Support datatime sample mysql
    if(item == 'datetime'){
        var data = randomDate(new Date(2012, 0, 1), new Date());
        postman.setEnvironmentVariable(item,data);
        return;
    }
    //numberRandom
    if(item == 'numberRandom'){
        var data = Math.floor((Math.random() * 999999999) + 0);
        postman.setEnvironmentVariable(item,data);
        return;
    }
    
    var Setting = {
      "async": true,
      "crossDomain": true,
      "url": "https://raw.githubusercontent.com/qtzznn/postman/master/fields/"+languageCode+"/text/"+item+".txt",
      "method": "GET"
    };
    $.ajax(Setting).done(function (response) {
        var lines = response.split('\n');
        var randomLine = lines[Math.floor((Math.random() * lines.length) + 0)];
      postman.setEnvironmentVariable(item,randomLine);
    }); 
});

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 19).replace('T', ' ');
}



