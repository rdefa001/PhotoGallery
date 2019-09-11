$(document).ready(function(){
   flag=0;
    $("#i1").click(function(){
      $("#bigImage").fadeIn();
        $("#bigImage img").attr('src','pic1.jpg');
        flag=1;
    });
    
     $("#i2").click(function(){
      $("#bigImage").fadeIn();
        $("#bigImage img").attr('src','pic2.jpg');
        flag=2;
    });
     $("#i3").click(function(){
      $("#bigImage").fadeIn();
        $("#bigImage img").attr('src','pic3.jpg');
        flag=3;
    });
     $("#i4").click(function(){
      $("#bigImage").fadeIn();
        $("#bigImage img").attr('src','pic4.jpg');
        flag=4;
    });
     $("#i5").click(function(){
      $("#bigImage").fadeIn();
        $("#bigImage img").attr('src','pic5.jpg');
        flag=5;
    });
     $("#i6").click(function(){
      $("#bigImage").fadeIn();
        $("#bigImage img").attr('src','pic6.jpg');
        flag=6;
    });
    
    $("#close").click(function(){
        $("#bigImage").fadeOut();
    });
    
    $("#next").click(function(){
        if(flag==1){
            $("#bigImage img").attr('src','pic2.jpg');
            flag=2;    
        }
        else if(flag==2){
            $("#bigImage img").attr('src','pic3.jpg');
            flag=3;    
        }
        else if(flag==3){
            $("#bigImage img").attr('src','pic4.jpg');
            flag=4;    
        }
        else if(flag==4){
            $("#bigImage img").attr('src','pic5.jpg');
            flag=5;    
        }
        else if(flag==5){
            $("#bigImage img").attr('src','pic6.jpg');
            flag=6;    
        }
        
          else if(flag==6){
            $("#bigImage img").attr('src','pic1.jpg');
            flag=1;    
        }
    });
    
      $("#pre").click(function(){
        if(flag==1){
            $("#bigImage img").attr('src','pic6.jpg');
            flag=6;    
        }
        else if(flag==2){
            $("#bigImage img").attr('src','pic1.jpg');
            flag=1;    
        }
        else if(flag==3){
            $("#bigImage img").attr('src','pic2.jpg');
            flag=2;    
        }
        else if(flag==4){
            $("#bigImage img").attr('src','pic3.jpg');
            flag=3;    
        }
        else if(flag==5){
            $("#bigImage img").attr('src','pic4.jpg');
            flag=4;    
        }
            else if(flag==6){
            $("#bigImage img").attr('src','pic5.jpg');
            flag=5;    
        }
    });
});