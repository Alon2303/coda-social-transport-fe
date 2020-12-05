import React from 'react';
import { useHistory } from 'react-router-dom';

const DonationSummary = (props) => {
    const { donation } = props;
    const history = useHistory();

    const handleDonationDetails = () => {
        const { id } = donation;
        history.push({
            pathname: '/donation/' + id
        })
    }

    return (
        (donation.id ? <tr key={donation.id} className="donations-table-body-row" onClick={handleDonationDetails} >
            <td>{donation.paymentStatus}</td>
            <td>{donation.status}</td>
            <td>{donation.shippingDate}</td>
            <td>{donation.shippingMethod}</td>
            <td>{donation.donorName}</td>
            <td>{donation.date}</td>
        </tr> :
            <tr>Loading ..</tr>
        )

    );
}

export default DonationSummary;