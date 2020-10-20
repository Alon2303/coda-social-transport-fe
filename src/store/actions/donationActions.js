import donationService from '../../services/donationService';

// LIST
export function loadDonations(filterBy) {
    return async dispatch => {
        const donations = await donationService.query(filterBy);
        dispatch({ type: 'SET_DONATIONS', donations })
    }
}

// READ
export function loadDonationById(id) {
    return async dispatch => {
        const donation = await donationService.getDonationById(id);
        dispatch({ type: 'SET_CURR_DONATION', donation })
    }
}

// UPDATE + CREATE
export function saveDonation(donation) {
    return async dispatch => {
        const isEdit = !!donation._id
        donation = await donationService.saveDonation(donation);

        if (isEdit) dispatch({ type: 'UPDATE_DONATION', donation })
        else dispatch({ type: 'ADD_DONATION', donation })
        return donation;
    }
}

// REMOVE
export function deleteDonation(id) {
    return async dispatch => {
        await donationService.deleteDonation(id);
        dispatch({ type: 'DELETE_DONATION', id })
    }
}
