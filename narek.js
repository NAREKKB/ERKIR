function StaticRange(){
    with(document){
        let l1= String(getElementById("left_1").value);
        let l2= String(getElementById("left_2").value);
        let l3= String(getElementById("left_3").value);
        let l4= String(getElementById("left_4").value);
        let l5= String(getElementById("left_5").value);
        let l6= String(getElementById("left_6").value);
        let r1= String(getElementById("right_1").value);
        let r2= String(getElementById("right_2").value);
        let r3= String(getElementById("right_3").value);
        let r4= String(getElementById("right_4").value);
        let r5= String(getElementById("right_5").value);

        let result = 0;
        let  quality;

        if(l1=='Yerevan'){
            result+=1
            getElementById('left_1').style.backgroundColor='green'
        }else{
            getElementById('left_1').style.backgroundColor='red'
        }

        if(l2=='Washington'){
            result+1
            getElementById('left_2').style.backgroundColor='green'
        }else{
            getElementById('left_2').style.backgroundColor='red'
        }

        if(result<=6){
            quality= 'anbavarar'
            getElementById('Answer').style.backgroundColor='red'
            getElementById('quality').style.backgroundColor='red'

        
        }
        if(result>6 && result<=15){
            quality= 'bavarar'
            getElementById('Answer').style.backgroundColor='gold'
            getElementById('quality').style.backgroundColor='gold'
        }
            getElementById('Answer').innerHTML = result
            getElementById('quality').innerHTML = quality
       }

       }