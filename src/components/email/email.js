import React, {useState} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import sendEmails from '../../api/email'
import Message from "./Message";
import Recipient from "./Recipient";
import Output from "./Output";
import {Card} from '@material-ui/core';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from '@material-ui/core/IconButton';

const Email = () => {
    const [recipients, setRecipients] = useState([]);
    const [temporaryRecipients, setTemporaryRecipients] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');


//Sends the data to the service that will check its validity && will forward it to the server
    const sendEmailsToBackEnd = async (e) => {
        if (!recipients.length) {
            alert('Recipient field must be field');
            return;
        }
        e.preventDefault(); //Prevents page refresh on submit
        try {
            const response = await sendEmails(recipients, title, body);
            setMessage(response.data.message);
        } catch (reason) {
            setMessage('Emails were not sent ' + reason);
        }
    };

    const iconElement = <IconButton key="close" arial-label="Close" color="inherit">x</IconButton>;
    const messageHtml = <span id="message-id">{message}</span>;
    return (
        <div>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                autoHideDuration={1000}
                open={message.length > 0}
                message={messageHtml}
                onClose={() => {
                    setMessage('')
                }}
                action= {iconElement}
            />
            <Card>
                <Form style={{padding: '1em'}} encType="multipart/form-data" onSubmit={sendEmailsToBackEnd}>
                    {/*To*/}
                    <FormGroup>
                        <Recipient
                            setRecipients={setRecipients}
                            setTemporaryRecipients={setTemporaryRecipients}
                            recipients={recipients}
                            temporaryRecipients={temporaryRecipients}/>
                    </FormGroup>

                    {/*Title*/}
                    <FormGroup>
                        Title:
                        <Input value={title} id="title" onChange={e => {
                            setTitle(e.target.value)
                        }}/>
                    </FormGroup>


                    {/*Body*/}
                    <FormGroup>
                        <Message value={body} onChange={e => {
                            setBody(e.target.value)
                        }}/>
                    </FormGroup>

                    <Output recipients={recipients} />

                    <br/>
                    <Button className="btn-secondary">Submit</Button>
                </Form>

            </Card>
        </div>
    );

};







export default Email;
