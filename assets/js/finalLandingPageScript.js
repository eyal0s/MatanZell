/**
 * Created by user on 08/08/15.
 */
$(document).ready(function(){
    $('#submit').click(function(){

        var userMail = $('#userMail').val().replace(/\s/g, '');
        if (userMail.length > 0 ){
            var serverFileLocation = 'server/process.php';
            var queryString = '?mail='  + userMail;
            var URI = serverFileLocation + queryString;
            $.get( URI, function( data ) {
                console.log(data);
            });
        }

    });

});