import fetcher from './fetcher';

const emailIsValid = email => {
    if (email === undefined) return;
    return /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(email);
};

//builds the input to the correct form to be processed by the backend
const prepareDataForSingleEmail = async (recipients, title, body) => {
    const emails = [
        {
            email: recipients[0].email,
            name: recipients[0].email.slice(0, recipients[0].email.indexOf('@'))
        }
    ];
    const data = {title, body, emails};
    return await sendEmail(data);
};

const sendEmail = async (data) => {
    return await fetcher.post('./api/email/send', {data});
};

//Sends Emails based on a list recieved from a file
const sendEmails = async (recipients, title, body) => {
    if (recipients[0].userInput) {
        try{
             return await prepareDataForSingleEmail(recipients, title, body);
        }catch (e) {
              console.error(e);
        }
    }

    let emails = [];
    for(let recipient of recipients ) {
        if (!(emailIsValid(recipient.email))) {
            alert('Something went wrong... some of the details for recipient are missing..\n'
                + 'this are his/her details:\n'
                + recipient.email);
            return;
        }
        emails.push(recipient);
        const data = {title, body, emails};
        try {
            return await sendEmail(data);
        } catch (e) {
            console.error(e);
        }
    }
};

export default sendEmails
