
$(document).ready(function(){
    let fonte = 16
    // Quando vc aumentar se a fonte for menor q 26 ele aumenta a fonte
    $('#aumentar').click(function(){
        if(fonte<26){
            fonte++
            $('body').css({'font-size': fonte+'px'})
        }
    })
    $('#diminuir').click(function(){
        if(fonte>13){
            fonte--
            $('body').css({'font-size': fonte+'px'})
        }
    })
})