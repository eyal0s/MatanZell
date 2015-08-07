/**
 * Created by user on 08/08/15.
 */
$(document).ready(function(){

    // ENUM
    var dict ={
        1 : '#one',
        2 :'#two'
    };


    // Picks which div to keep
    var generateAB = function(){
      var choosen = randomizeOneOrTwo();
        //alert(choosen);
        $(choosen).remove();

        $('#mainScroll').attr('href',getOpposite(choosen));
        return;
    };

    var getOpposite = function(picked){
      return picked === dict[1] ? dict[2] : dict[1];
    };
    // Randomizes one or two
    var randomizeOneOrTwo = function(){
        return dict[Math.round(Math.random() +1)];
    }


    // Invoke all
    generateAB();
});