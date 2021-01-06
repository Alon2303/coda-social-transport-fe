import React from 'react';

export default function Output(props) {
    return (
        <>
            {(props.recipients.length > 0) && //if recipients array is empty hide the div
            <div>
                <h6><u><i>Recipients:</i></u></h6>
                {props.recipients.map((recipient, i) => (
                    <div className="recipient" key={i}>{recipient.email}</div>
                ))}
            </div>
            }
        </>
    );
}

