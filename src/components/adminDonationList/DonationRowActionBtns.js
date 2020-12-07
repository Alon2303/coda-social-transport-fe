import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Services
import donationService from '../../services/donationService';
import { loadDonationById, saveDonation } from '../../store/actions/donationActions';

const DonationRowActionBtns = (props) => {
    const { donation } = props;

    let { classRow } = props;

    useEffect(() => {
        classRow = 'hide-row-action-btns'
    }, []);

    const handleDonationStatus = async (donation, status) => {
        const { id } = donation;
        if (window.confirm(`Are you sure you want to change ${donation.donorName}'s donation to ${status}?`)) {
            let updatedDonation = await donationService.updateStatus(id, status);
            await props.saveDonation(updatedDonation);
            await props.loadDonationById(id);
        }
    }

    return (
        (donation.id ? <tr key={donation.id} className="donations-table-body-row"  >
            <td>
                <button onClick={() => handleDonationStatus(donation, 'on hold')}
                    variant="tertiary"
                    size="xs"
                    value="On Hold"
                    className={classRow}
                >
                    Hold
                  </button>
                <button
                    onClick={() => handleDonationStatus(donation, 'canceled')}
                    variant="tertiary"
                    size="xs"
                    value="Cancel"
                    className={classRow}

                >
                    Cancel
                  </button>
            </td>
        </tr> :
            <tr>Loading ..</tr>
        )
    );
}


const mapStateToProps = (state) => {
    return {
        donations: state.donation.donations
    };
};

const mapDispatchToProps = {
    loadDonationById,
    saveDonation
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationRowActionBtns);