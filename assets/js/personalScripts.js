/**
 * Created by user on 08/08/15.
 */
$(document).ready(function(){

    // ENUM
    var numberToID ={
        1 : '#one',
        2 :'#two'
    };

    var IDToNumber = {
'#one' : 1,
        '#two' : 2
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
      return picked === numberToID[1] ? numberToID[2] : numberToID[1];
    };
    // Randomizes one or two
    var randomizeOneOrTwo = function(){
        return numberToID[Math.round(Math.random() +1)];
    }


    // Invoke all
    generateAB();
});