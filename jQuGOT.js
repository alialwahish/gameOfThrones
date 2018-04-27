$(document).ready(function(){
   
       
            var html_str="<h4>House Detail</h4>";
            
            $("#houseDtl ").html((html_str));
            $("#wrapper").prepend("<h1>Game Of Thrones</h1>")             
            $('img').click(function(){
                html_str="<h4>House Detail</h4>";
                var houseNumber=0;
                $("#houseDtl").html(("<h4>House Detail</h4>"))
                
                        
                if(($(this).attr("alt"))=="baratheon"){
                    houseNumber=17;
                }
                else if(($(this).attr("alt"))=="lannister"){
                    houseNumber=229;
                        
                }
                else if(($(this).attr("alt"))=="stark"){
                    houseNumber=362;
                        
                }
                else if(($(this).attr("alt"))=="targaryen"){
                    houseNumber=378;
                }
            
                $.get("https://anapioficeandfire.com/api/houses/"+houseNumber,function(res){ 
               
                 html_str+=("<h2>Name: "+res.name+"</h2>");
                 html_str+=("<h2>Words: "+res.words+"</h2><p><b>Titles:</b> ");
                 for(var i=0;i<res.titles.length;i++){
                     html_str+=res.titles[i];
                 }
                 html_str+="</p>";
                 $("#houseDtl").html(html_str);                

                },'json');
               
            }); 

        
    
})