/**
 * Created by Lama on 08.01.2016.
 */
var mixedEmails = ['JOHN@ACME.COM', 'Mary@FooBar.com', 'monty@spam.eggs'];
console.log("mixedEmails = " + mixedEmails);

function getEmailsInLowercase(emails) {
    var lowercaseEmails = [];

    for (var i = 0; i < emails.length; i++) {
        lowercaseEmails.push(emails[i].toLowerCase());
    }
    console.log(lowercaseEmails);
    return lowercaseEmails;
}

var validData = getEmailsInLowercase(mixedEmails);