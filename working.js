let input_field = document.getElementById("input-field");
var text = document.getElementsByClassName('btn');
var text2 = document.getElementsByClassName('eval');
function calculate(id) {
    switch (id) {
        case "one":
           document.getElementById("input-field").value += document.getElementById("one").value
            break;
        case "two":
           document.getElementById("input-field").value += document.getElementById("two").value
            break;    
        case "three":
           document.getElementById("input-field").value += document.getElementById("three").value
            break;
        case "four":
           document.getElementById("input-field").value += document.getElementById("four").value
            break;
        case "five":
           document.getElementById("input-field").value += document.getElementById("five").value
            break;
        case "six":
           document.getElementById("input-field").value += document.getElementById("six").value
            break;
        case "seven":
           document.getElementById("input-field").value += document.getElementById("seven").value
            break;
        case "eight":
           document.getElementById("input-field").value += document.getElementById("eight").value
            break;
        case "nine":
           document.getElementById("input-field").value += document.getElementById("nine").value
            break;
        case "zero":
           document.getElementById("input-field").value += document.getElementById("zero").value
            break;  
        case "plus":
           document.getElementById("input-field").value += document.getElementById("plus").value
            break;  
         case "minus":
           document.getElementById("input-field").value += document.getElementById("minus").value
            break;  
         case "multi":
           document.getElementById("input-field").value += document.getElementById("multi").value
            break; 
         case "divide":
           document.getElementById("input-field").value += document.getElementById("divide").value
            break;  
         case "mod":
           document.getElementById("input-field").value += document.getElementById("mod").value
            break;  
         case "dot":
           document.getElementById("input-field").value += document.getElementById("dot").value
            break;
         case "clear":
           document.getElementById("input-field").value = ' '
            break;    
         case "back":
            var a = document.getElementById("input-field").value;
            var b = a.substring(0,a.length -1);
            document.getElementById("input-field").value = b;
            break; 
         case "equal":
             let value = document.getElementById("input-field").value
             let result = eval(value)
           document.getElementById("input-field").value = result
            break;                            
        default:
            break;
    }
    
}

function changecolor(){
    if(document.getElementById("change_color").style.background === "white")
    {     
          document.getElementById("cal").style.background = "black"
          document.getElementById("input-field").style.background = "black"
           document.getElementById("input-field").style.color = "white"
          document.getElementById("change_color").style.background = "black"
        document.getElementById("change_color").innerHTML = "Dark Mode"
       
       for (var i = 0; i < text.length; i++) {
                 text[i].style.background = 'linear-gradient( #030909 , #142d38)';
                 text[i].style.color = 'white'
            }
         for (var i = 0; i < text2.length; i++) {
                 text2[i].style.background = 'linear-gradient( #05a898be  ,#348878)';
                  text2[i].style.color = 'white'
            }
           document.getElementById("equal").style.background = '#348878'
          
    }
    else{
          document.getElementById("cal").style.background = '#E8E8E8'
          document.getElementById("input-field").style.background = "white"
          document.getElementById("input-field").style.color  = "black"
          document.getElementById("change_color").style.background = "white"
          document.getElementById("change_color").innerHTML = "Light Mode"
          for (var i = 0; i < text.length; i++) {
                 text[i].style.background = '#D3D3D3';
                  text[i].style.color = 'black'
            }
 
        for (var i = 0; i < text2.length; i++) {
                 text2[i].style.background = 'linear-gradient( #05a898be  ,#348878)';
                  text2[i].style.color ='black'
            }
           document.getElementById("equal").style.background = '#348878'
           
    }
} 







/* 
 function changecolor(){
    if(document.getElementById("cal2").style.display === "block" )
    {
        document.getElementById("cal").style.display = "block"
        document.getElementById("cal2").style.display = "none"
        document.getElementById("change_color").style.background = "black"
        document.getElementById("change_color").innerHTML = "Dark mode"

    }
    else
    {
        document.getElementById("cal").style.display = "none" 
         document.getElementById("cal2").style.display = "block"
         document.getElementById("change_color").style.background = "white"
         document.getElementById("change_color").innerHTML = "Light mode"
    } 
}  */