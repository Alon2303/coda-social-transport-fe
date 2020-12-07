import fetcher from './fetcher';

const addDonationToDB = async (alternativeShippingDate, status, awaitingPaymeny, paymentStatus, donorName,logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress,shippingMethod, comments) =>{
    console.log("inside adding donaition to db");
    try {
        console.log("im sending", alternativeShippingDate, status, awaitingPaymeny, paymentStatus, donorName,logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress,shippingMethod, comments);
        const add = await fetcher.post('./api/donordonation', {alternativeShippingDate, status, awaitingPaymeny, paymentStatus, donorName,logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress,shippingMethod, comments});
        console.log("donation added",add);
        return add;
    }catch(error){
        console.error(error)
    }
};

export { addDonationToDB };


