const newDonationTemplate = {
    donorName: '',
    logo: null,
    contactName: '',
    phone: '',
    shippingDateStart: '',
    shippingDateEnd: '',
    pickUpAddress: '',
    shippingMethod: 'הובלה עצמאית',
    isSelfShipping: true,
    shippingComments: '',
    comments: '',
}


function getNewDonationTemplate() {
    return newDonationTemplate;
}

export default {
    getNewDonationTemplate
}