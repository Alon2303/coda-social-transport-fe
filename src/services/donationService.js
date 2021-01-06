import httpService from './httpService';

async function query(filterBy = { 'status': 'open' }) {
    var queryStr = "?";
    queryStr += `&status=${filterBy.status}`;
    try {
        const donations = await httpService.get(`api/donation${queryStr}`);
        return Promise.resolve(donations);
    } catch (error) {
        console.error(error);
    }
}

async function getById(donationId) {
    return await httpService.get(`api/donation/${donationId}`);
}


async function updateTag(donationId, itemIdx, tag) {
    const donation = await getById(donationId);
    donation.items[itemIdx].tags = tag;
    // save(donation);
    return donation;
}

async function updateStatus(donationId, status) {
    const donation = await getById(donationId);
    donation.status = status;
    // save(donation);
    return donation;
}

async function updateItemCount(donationId, itemIdx, updatedCount) {
    const donation = await getById(donationId);
    donation.items[itemIdx].count = updatedCount;
    // save(donation);
    return donation;
}

async function updateItemAccept(donationId, itemIdx, updatedValue) {
    const donation = await getById(donationId);
    donation.items[itemIdx].itemAccepted = updatedValue;
    // save(donation);
    return donation;
}

async function updateRejectReason(donationId, itemIdx, reason) {
    console.log('REASON IN SERVICE< ', reason);
    const donation = await getById(donationId);
    donation.items[itemIdx].rejectionReason = reason;
    // save(donation);
    return donation;
}

function save(donation) {
    return httpService.patch(`api/donation/${donation._id}`, donation);
}

export default {
    query,
    getById,
    save,
    updateTag,
    updateStatus,
    updateItemCount,
    updateItemAccept,
    updateRejectReason
}