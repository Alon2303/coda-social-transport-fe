import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Services
import adminDonationService from '../../services/adminDonationService';
import { loadDonationById, saveDonation } from '../../store/actions/donationActions';

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
    }, [itemAccepted, rejectionReason]);

    const handleItemAccept = async (e) => {
        const newValue = e.target.value;
        setItemAccepted(newValue);
        const { donationId, itemIdx } = props;
        let updatedDonation = await adminDonationService.updateItemAccept(donationId, itemIdx, newValue);
        await props.saveDonation(updatedDonation);
    }

    const onSetReason = async (e) => {
        const { donationId, itemIdx } = props;
        let updatedDonation = await adminDonationService.updateRejectReason(donationId, itemIdx, e.target.value);
        // await props.saveDonation(updatedDonation);
        await props.saveDonation(updatedDonation);
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

const mapDispatchToProps = {
    loadDonationById,
    saveDonation
};

export default connect(null, mapDispatchToProps)(AcceptItemToggle);