

const initState = {
    donations: [],
    currDonation: null,
    currDonationStatus: ''
}

const donationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_DONATIONS':
            return { ...state, donations: action.donations };
        case 'SET_CURR_DONATION':
            return { ...state, currDonation: action.donation };
        case 'UPDATE_DONATION':
            return {
                ...state,
                donations: state.donations.map(donation => {
                    if (donation._id === action.donation._id) return { ...state, currDonation: action.donation };
                    return donation;
                })
            }
        case 'DELETE_DONATION':
            return {
                ...state,
                donations: state.donations.filter(donation => {
                    return donation._id !== action.donationId
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
