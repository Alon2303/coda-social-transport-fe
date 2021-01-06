import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DonationRowActionBtns from './DonationRowActionBtns';

const DonationSummary = (props) => {
    const [classRow, setClassRow] = useState('hide-row-action-btns');
    const { donation } = props;
    const history = useHistory();

    const handleDonationDetails = (e) => {
        if (e.target.value !== 'Cancel' && e.target.value !== 'On Hold') {
            const id = donation._id;
            history.push({
                pathname: '/donation/' + id
            });
        }
    }

    const showActionBtns = () => {
        setClassRow('show-row-action-btns');
    }
    const hideActionBtns = () => {
        setClassRow('hide-row-action-btns');
    }

    return (
        (donation._id ? <tr dir="rtl" key={donation._id} className="donations-table-body-row"
            onClick={(e) => handleDonationDetails(e)}
            onMouseOver={() => showActionBtns()}
            onMouseOut={() => hideActionBtns()}
        >
            <td>{donation.date}</td>
            <td>{donation.donorName}</td>
            <td>{donation.shippingMethod}</td>
            <td>{donation.shippingDate}</td>

            <td>{donation.status}</td>
            <td>{donation.paymentStatus}</td>
            <td className={classRow} >
                <DonationRowActionBtns key={donation._id} donation={donation} classRow={classRow} />
            </td>
        </tr> :
            <tr>Loading ..</tr>
        )

    );
}

export default DonationSummary;