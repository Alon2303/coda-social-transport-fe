
const initState = {
    currDonor: null,
    currDonorsDonationItems: [],
    currDonorsDonationShippingInfo: null
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CASE_NAME':
            return state;
        default:
            return state;
    }
};

export default userReducer;
