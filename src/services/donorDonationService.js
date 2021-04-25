const newDonationTemplate = {
    donorName: '',
    logo: null,
    shippingMethod: 'הובלה עצמאית',
    shippingDateStart: '',
    shippingDateEnd: '',
    alternativeShippingDate: '',
    pickUpAddress: '',
    isSelfShipping: true,
    shippingComments: '',
    comments: '',
    status: 'חדש',
    awaitingPayment: '',
    paymentStatus: '',
    contact: {
        contactName: '',
        phone: '',
    },
    items: []
}


function getNewDonationTemplate() {
    return newDonationTemplate;
}

export default {
    getNewDonationTemplate
}