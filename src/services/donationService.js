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
    donation.items[itemIdx].tag = tag;
    save(donation);
}

async function updateItemCount(donationId, itemIdx, updatedCount) {
    const donation = await getById(donationId);
    donation.items[itemIdx].count = updatedCount;
    save(donation);
}

async function updateItemAccept(donationId, itemIdx, updatedValue) {
    const donation = await getById(donationId);
    donation.items[itemIdx].itemAccepted = updatedValue;
    save(donation);
}

async function updateRejectReason(donationId, itemIdx, reason) {
    console.log('REASON IN SERVICE< ', reason);
    const donation = await getById(donationId);
    donation.items[itemIdx].rejectionReason = reason;
    console.log('UPDATED SONATION ITEM AFTER : ', donation);
    save(donation);
}

function save(donation) {
    return httpService.put(`api/donation/${donation.id}`, donation);
}

export default {
    query,
    getById,
    save,
    updateTag,
    updateItemCount,
    updateItemAccept,
    updateRejectReason
}