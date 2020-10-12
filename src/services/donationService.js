import httpService from './httpService';

async function query() {
    try {
        const donations = await httpService.get(`api/donation`);
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

function save(donation) {
    return httpService.put(`api/donation/${donation.id}`, donation);
}

export default {
    query,
    getById,
    save,
    updateTag,
    updateItemCount
}