import React, {useState} from 'react';
import {Input, Label} from "reactstrap";
import {excelFileReader} from '../../services/FileHandler';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';


function Recipient(props) {
    const {setRecipients, setTemporaryRecipients, recipients, temporaryRecipients} = props;
    const [isFromFile, setIsFromFile] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

//When you change the input method, updates the recipients && temporary recipients arrays
    const handleCheckboxChange = e => {
        let uniqueObjectsArray = recipients;
        setRecipients(temporaryRecipients);
        setTemporaryRecipients(uniqueObjectsArray);
        setIsFromFile(e.target.checked)
    };

//Calls the service that gets the emails from the excel file and updates the recipients array
    const fetchEmailsFromFile = (e) => {
        excelFileReader(e.target.files[0]).then(users => {
            setRecipients(users);
        });
    };

//remove the EOF character (',') from the email inputs value to avoid a validation error
    const validateName = str => {
        return str.replace(';', '');
    };

//Handles any changes on the user input field( keyboard i/o), constructs the object array && updates the recipients array
    const onChangeTextInput = e => {
        if(e.keyCode === 186)
            setIsDisabled(true);
        const value = e.target.value;
        const email = validateName(value);
        const user = {
            email: email,
            name: '',
            userInput: true
        };
        setRecipients([user]);
    };

    return (
        <>
            <h3 style={{textAlign: 'center'}}><u><i>Email</i></u></h3>
            <br/>
            <Label for="recipient">Recipient <span>(To:)</span>
                <HelpOutlineOutlinedIcon color="primary"/>
            </Label><br/>
            <div style={{display: '-webkit-box'}}>
                <span>Please enter a recipient in the text box below, or,<br/>
                check the box to select a file:</span>
                <label className="container">
                    <Input type="checkbox" disabled={isDisabled} onChange={e => handleCheckboxChange(e)}/>
                    <span className="checkmark"/>
                </label>
            </div>
            <div><br/>
                {isFromFile ?
                    <div>
                        <Input
                            type="file" id="file" className="inputfile"
                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            multiple
                            onChange={e => {
                                fetchEmailsFromFile(e);
                            }}
                        />
                        <label htmlFor="file">Choose a file</label>
                    </div>
                    :
                    <div>
                        <Input
                            type="email" name="recipient" noValidate disabled={isDisabled}
                            id="singleEmail" onKeyDown={e => onChangeTextInput(e)}
                            placeholder="Please type a semi-colon (;) after the email address"
                        />
                    </div>
                }

            </div>
        </>
    );
}

export default Recipient;
