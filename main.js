var all;

$.ajax({
        type:"POST",
		url: "https://wegdut.yoricklee.com/cet",
		ContentType: "application/x-www-form-urlencoded",
    	async:false,
        data:{
        	zkzh:"440380162119017",
        	xm:"徐静"
        },
        success:function(msg){
            
            console.log(msg);
            return;
        },
        error:function(msg){
            all=msg.responseText;
            console.log(cut(all,"听<span class='space_long'>&nbsp;</span>力","<td>","</td>"))
            console.log(cut(all,"阅<span class='space_long'>&nbsp;</span>读","<td>","</td>"))
            console.log(cut(all,"写作和翻译","<td>","</td>"))
            console.log(cut(all,"总<span class='space'>&nbsp;</span>分",'<span class="colorRed">',"</span>"))
            console.log(cutForLevel(all,"考试级别","</td>"))
            return;
        },
    });


function cut(str,start,middle,end){
	var stepOne = str.slice(str.indexOf(start)+start.length,str.indexOf(end,str.indexOf(start)+start.length))
	var stepTwo = stepOne.slice(stepOne.indexOf(middle)+middle.length)
	return parseInt(stepTwo) 
}

function cutForLevel(str,start,end){
	// console.log('<td colspan="2">'.length)
	var stepOne = str.slice(str.indexOf(start),str.indexOf(end,str.indexOf(start)))
	if (stepOne.match("英语四级")) {return "英语四级"}
	else if (stepOne.match("英语六级")) {return "英语六级"}
	else return "false"
}
