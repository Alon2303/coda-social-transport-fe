import adminDonationService from '../../services/adminDonationService';

// LIST
export function loadDonations(filterBy) {
    return async dispatch => {
        let donations = await adminDonationService.query(filterBy);
        dispatch({ type: 'SET_DONATIONS', donations })
    }
}

// READ
export function loadDonationById(donationId) {
    console.log(donationId, 'in action');
    return async dispatch => {
        let donation = await adminDonationService.getById(donationId);
        dispatch({ type: 'SET_CURR_DONATION', donation })
    }
}

export function setNewDonation(donation) {
    console.log(donation, ' setting up new donation in action');
    return dispatch => {
        dispatch({ type: 'SET_CURR_DONATION', donation })
    }
}

// UPDATE + CREATE
export function saveDonation(donation) {
    return async dispatch => {
        const isEdit = !!donation._id;
        donation = await adminDonationService.save(donation);
        if (isEdit) dispatch({ type: 'UPDATE_DONATION', donation })
        else dispatch({ type: 'ADD_DONATION', donation })
        return donation;
    }
}

// REMOVE
export function deleteDonation(donationId) {
    return async dispatch => {
        await adminDonationService.deleteDonation(donationId);
        dispatch({ type: 'DELETE_DONATION', donationId })
    }
}
