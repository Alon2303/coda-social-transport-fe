import fetcher from './fetcher';

const addDonationToDB = async (alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, shippingComments, comments) => {
    console.log("inside adding donation to db");
    try {
        console.log("im sending", alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, shippingComments, comments);
        const add = await fetcher.post('./api/donordonation', { alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, shippingComments, comments });
        console.log("donation added", add);
        return add;
    } catch (error) {
        console.error(error)
    }
};

export { addDonationToDB };


