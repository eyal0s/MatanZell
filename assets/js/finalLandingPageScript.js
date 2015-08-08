/**
 * Created by user on 08/08/15.
 */
$(document).ready(function(){
    $('#submit').click(function(){

        var userMail = $('#userMail').val().replace(/\s/g, '');
        if (userMail.length > 0 ){
            $('#MailError').css('display','none');
            $('#MailSuccess').css('display','block');
            $('#userMail').css('border','1px solid #9dc66b');

            var serverFileLocation = 'server/process.php';
            var queryString = '?mail='  + userMail;
            var URI = serverFileLocation + queryString;
            $.get( URI, function( data ) {
                console.log(data);
            });
        }else{
            $('#userMail').css('border','1px solid maroon');
            $('#MailSuccess').css('display','none');
            $('#MailError').css('display','block');
        }

    });

});