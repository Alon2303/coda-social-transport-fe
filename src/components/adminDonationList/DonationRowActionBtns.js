import React, { useEffect } from 'react';

const DonationRowActionBtns = (props) => {
    const { donation } = props;

    let { classRow } = props;

    useEffect(() => {
        classRow = 'hide-row-action-btns'
    }, []);


    const handleEditDonation = () => {
        const { id } = donation;
        console.log('EDITING...');
    }


    const handleDeleteDonation = () => {
        const { id } = donation;
        console.log('DELETING ...');
    }


    return (
        (donation.id ? <tr key={donation.id} className="donations-table-body-row"  >
            <td>
                <button onClick={handleEditDonation}
                    variant="tertiary"
                    size="xs"
                    value="Edit"
                    className={classRow}
                >
                    Edit
                  </button>
                <button
                    onClick={handleDeleteDonation}
                    variant="tertiary"
                    size="xs"
                    value="Delete"
                    className={classRow}

                >
                    Delete
                  </button>
            </td>
        </tr> :
            <tr>Loading ..</tr>
        )

    );
}

export default DonationRowActionBtns;