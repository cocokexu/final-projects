//从老师指定的网站api取数据
axios.get('https://www.anapioficeandfire.com/api/books')
.then(function(response){
    //console.log(response);
        $(eval(response).data).each(function (index, domEle) { 
        if(index%2==0){
            $(".list-group-alive").append("<li class=\"list-group-item alive-css\">"+domEle.name+"</li>");
        }else{
            $(".list-group-dead").append("<li class=\"list-group-item dead-css\">"+domEle.name+"</li>");
        }
});
    
})
.catch(function(error){
    console.log(error);
});