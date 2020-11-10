import React, { useState, useEffect } from 'react';

// Services
import donationService from '../../services/donationService';

// Components
import Editable from './Editable';

const AcceptItemToggle = (props) => {
    const [itemAccepted, setItemAccepted] = useState('');
    const [rejectionReason, setRejectionReason] = useState('');
    const reasons = ['reason 1', 'reason 2', 'reason 3'];


    useEffect(() => {
        const { itemAccepted, rejectionReason } = props.item;
        if (itemAccepted) setItemAccepted(itemAccepted);
        if (itemAccepted === 'no') {
            setRejectionReason(rejectionReason);
            reasons.unshift(rejectionReason);
        }
        console.log('reasons ', reasons);
    }, [itemAccepted, rejectionReason]);

    const handleItemAccept = (e) => {
        const newValue = e.target.value;
        setItemAccepted(newValue);
        const { donationId, itemIdx } = props;
        donationService.updateItemAccept(donationId, itemIdx, newValue);
    }

    const onSetReason = (e) => {
        console.log('rejectionReason: ', e.target.value);
        const { donationId, itemIdx } = props;
        donationService.updateRejectReason(donationId, itemIdx, e.target.value);
    }

    const acceptedStyle = 'toggle-accept accepted';
    const rejectedStyle = 'toggle-accept rejected';
    const reasonsList = reasons.length > 0
        && reasons.map((reason, i) => {
            return (
                <option key={i} value={reason} >{reason}</option>
            )
        });
    return (
        <section>
            <button value="yes" onClick={(e) => handleItemAccept(e)}
                className={(itemAccepted === 'yes') ? acceptedStyle : 'toggle-accept'}
            >Accept
            </button>
            <button value="no" onClick={(e) => handleItemAccept(e)}
                className={(itemAccepted === 'no') ? rejectedStyle : 'toggle-accept'}
            >Reject
            </button>
            {(itemAccepted === 'no') ?
                <select onChange={(e) => onSetReason(e)}>
                    {reasonsList}
                </select>
                : ''}
        </section>
    );
}

export default AcceptItemToggle;