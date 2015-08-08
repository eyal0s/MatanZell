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
    var IDToState = {
        '#one' : 'A',
        '#two' : 'B'
    };

    var answer = {
        'A' : '2',
        'B' : 'life'
    };


    var init = function(){
        displayNext(false);
    };

    var displayNext = function(state){
        var elem = $('#next');
        if (state){
            // display
            elem.css('display','block');
        }else{
            elem.css('display','none');
        }
    };
    // Picks which div to keep
    var generateAB = function(){
        var choosen = randomizeOneOrTwo();

        // Save state as global

        window.state = IDToState[getOpposite(choosen)];

        // removes the chosen element!
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

    var verifyAnswer= function(userAnswer){
        return userAnswer === answer[window.state];
    };


    // Invoke all
    generateAB();
    init();
    // NOTICE ! Listeners must come AFTER init! else they bind wrongly

    // Listeners
    $('#submit').click(function(){
        var userInput = $('#answer').val();
        // TODO: Ajax call to server with answer
        if (verifyAnswer(userInput)){
            displayNext(true);
        }else{
            displayNext(false);
            alert('nope');
        }
    });

    $('#next').click(function(){
        alert('now something should happen!');
    });


});