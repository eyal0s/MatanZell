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

    var headerElem = $('#header');

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
        var choosenOppose = getOpposite(choosen);

        // Save stateSymbol as global

        window.stateSymbol = IDToState[getOpposite(choosen)];

        // removes the chosen element!
        window.removedState = $(choosen);
        window.currentState = $(choosenOppose);
        $(choosen).remove();



        $('#mainScroll').attr('href',getOpposite(choosen));
        return;
    };

    // Gets a number, returns ID from dictionary
    var getOpposite = function(picked){
        return picked === numberToID[1] ? numberToID[2] : numberToID[1];
    };

    // Randomizes one or two, returns ID
    var randomizeOneOrTwo = function(){
        return numberToID[Math.round(Math.random() +1)];
    }

    var verifyAnswer= function(userAnswer){
        return userAnswer === answer[window.stateSymbol];
    };

    var switchStates = function(){
        var temp = window.currentState;
        window.currentState = window.removedState;
        window.removedState = temp;
        window.stateSymbol = window.stateSymbol === 'A' ? 'B' : 'A';
    };




    var bindListeners = function(){
        // Listeners
        $('#submit').on('click', function(){
            var userInput = $('#answer').val();
            window.location = 'success_' + window.stateSymbol + '.html';


            // Following part is irrelevant due to Matan being an asshole
            /**
             if (verifyAnswer(userInput)){
                displayNext(true);
            }else{
                displayNext(false);
                alert('nope');
            }
             **/
        });

        $('#next').click(function(){
            switchStates();

        });

        $('#sendMail').click(function(){
            var userMail = $('#mail').val();
            alert('Should send mail to ' + userMail);
        });
    };



    // Invoke all
    generateAB();
    init();
    bindListeners();



});