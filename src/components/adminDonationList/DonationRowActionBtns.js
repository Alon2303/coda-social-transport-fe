import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Services
import adminDonationService from '../../services/adminDonationService';
import { loadDonationById, saveDonation } from '../../store/actions/donationActions';

const DonationRowActionBtns = (props) => {
    const { donation } = props;

    let { classRow } = props;

    useEffect(() => {
        classRow = 'hide-row-action-btns'
    }, []);

    const handleDonationStatus = async (donation, status) => {
        const id = donation._id;
        if (window.confirm(`Are you sure you want to change ${donation.donorName}'s donation to ${status}?`)) {
            let updatedDonation = await adminDonationService.updateStatus(id, status);
            await props.saveDonation(updatedDonation);
            await props.loadDonationById(id);
        }
    }

    return (
        (donation._id ? <tr key={donation._id} className="donations-table-body-row"  >
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