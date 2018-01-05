var box = $(".box");
var divs = box.find("a");
var arrColor=['',"bg1.jpg","wuziqi.jpg","app.jpg","qiye.jpg","dazi.jpg"]
//遍历每一个DIV  然后再里面先创建一个UL,然后再创建9个LI
var x,y;
divs.each(function(index,el){
    var ul = $("<ul></ul>");
    for(var i=0;i<9;i++){
        x=i%3
        y=Math.floor(i/3)
        var li = $("<li class='mofang11'></li>");
        li.css("backgroundImage",'url("img/'+arrColor[index]+'")')
            .css("background-position",(-x*100)+'px '+(-y*100)+'px');
        ul.append(li);   //把9个LI分别追加到UL里
    }
    $(el).append(ul);  //把ul追加到每一个DIV里
})

var arrPostion=[];
for(var i=0;i<54;i++){
    arrPostion.push(parseInt(Math.random()*350));
}
$(".mofang11").each(function(index,el){
    $(el).css({"left":arrPostion[index],"top":arrPostion[index]});
})
$(".mofang11").each(function(index, el) {
    $(el).animate({"left": 0, "top": 0}, 3000)
});