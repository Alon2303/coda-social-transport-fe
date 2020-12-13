import donationService from '../../services/donationService';

// LIST
export function loadDonations(filterBy) {
    return async dispatch => {
        let donations = await donationService.query(filterBy);
        dispatch({ type: 'SET_DONATIONS', donations })
    }
}

// READ
export function loadDonationById(donationId) {
    console.log(donationId, 'in action');
    return async dispatch => {
        let donation = await donationService.getById(donationId);
        console.log('in action , ', donation);
        dispatch({ type: 'SET_CURR_DONATION', donation })
    }
}

// UPDATE + CREATE
export function saveDonation(donation) {
    return async dispatch => {
        const isEdit = !!donation._id;
        donation = await donationService.save(donation);
        if (isEdit) dispatch({ type: 'UPDATE_DONATION', donation })
        else dispatch({ type: 'ADD_DONATION', donation })
        return donation;
    }
}

// REMOVE
export function deleteDonation(donationId) {
    return async dispatch => {
        await donationService.deleteDonation(donationId);
        dispatch({ type: 'DELETE_DONATION', donationId })
    }
}
