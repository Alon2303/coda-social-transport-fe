import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DonationRowActionBtns from './DonationRowActionBtns';


const DonationSummary = (props) => {
    const [classRow, setClassRow] = useState('hide-row-action-btns');
    const { donation } = props;
    const history = useHistory();

    const handleDonationDetails = (e) => {
        console.log('e.target.value === ', e.target.value);
        if (e.target.value !== 'Delete' && e.target.value !== 'Edit') {
            const { id } = donation;
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


    const handleEditDonation = () => {
        const { id } = donation;
        console.log('EDITING...');
    }

    const handleDeleteDonation = () => {
        const { id } = donation;
        console.log('DELETING ...');
    }

    return (
        (donation.id ? <tr dir="rtl" key={donation.id} className="donations-table-body-row"
            onClick={(e) => handleDonationDetails(e)}
            onMouseOver={() => showActionBtns()}
            onMouseOut={() => hideActionBtns()}
        >
            {/* <DonationRowActionBtns key={donation.id} donation={donation} classRow={classRow} /> */}
            <td>{donation.date}</td>
            <td>{donation.donorName}</td>
            <td>{donation.shippingMethod}</td>
            <td>{donation.shippingDate}</td>

            <td>{donation.status}</td>
            <td>{donation.paymentStatus}</td>
            <td className={classRow} >
                <button onClick={handleEditDonation} variant="tertiary" size="xs" value="Edit">Edit</button>
                <button onClick={handleDeleteDonation} variant="tertiary" size="xs" value="Delete">Delete</button>
            </td>
        </tr> :
            <tr>Loading ..</tr>
        )

    );
}

export default DonationSummary;