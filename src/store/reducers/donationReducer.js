

const initState = {
    donations: [],
    currDonation: null
}

const donationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_DONATIONS':
            return { ...state, donations: action.donations };
        case 'SET_CURR_DONATION':
            return { ...state, currDonation: action.donation };
        case 'UPDATE_DONATION_TAG':
            return {
                ...state,
                donations: state.donations.map(donation => {
                    if (donation.id === action.donation.id) return action.donation;
                    return donation;
                })
            }
        case 'DELETE_DONATION':
            return {
                ...state,
                donations: state.donations.filter(donation => {
                    return donation.id !== action.id
                })
            }
        case 'ADD_DONATION':
            return {
                ...state,
                donations: [...state.donations, action.donation]
            }
        default:
            return state;
    }
};

export default donationReducer;
