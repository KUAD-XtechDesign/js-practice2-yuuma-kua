$(function(){

    let hako = 0;

    function checkbox(){
        if(hako > 5){
            $("#content").text(hako + "個はいっています。箱はいっぱいです。空にします");
            hako = 0;
        }else if(hako < 0){
            hako = 0;
            $("#content").text(hako + "個。入ってません");
        }else{
            $("#content").text(hako + "個はいっています。まだ入ります。");
        }
    }
    $("#button01").on("click",function(){
     checkbox()
      })

      $("#button02").on("click",function(){
     hako++;
     checkbox()
      })

      $("#button03").on("click",function(){
     hako--;
     checkbox()
      })
})