import React, { Component } from 'react';
import DonationSummary from '../components/adminDonationList/DonationSummary';

// Services
import donationService from '../services/donationService';

class DonationsList extends Component {
    state = {
        donations: [],
        status: 'Open donations',
        donationStatuses: ['Open donations', 'Closed donations', 'Archived donations', 'All donations']
    }

    async componentDidMount() {
        // const donations = await donationService.query();
        // this.setState({ ...this.state, donations });
        await this.getDonations();
    };

    async getDonations() {
        const filterBy = { status: this.state.status }
        console.log('FILTER BY: ', filterBy);
        const donations = await donationService.query(filterBy);
        this.setState({ ...this.state, donations });
    }

    onSetFilter = (e) => {
        const selectedStatus = e.target.value;
        this.setState({ ...this.state, status: selectedStatus }, function () {
            this.getDonations();
        });
    }

    render() {
        const { donationStatuses } = this.state;
        this.onSetFilter = this.onSetFilter.bind(this);
        let donationStatusesList = donationStatuses.length > 0
            && donationStatuses.map((item, i) => {
                return (
                    <option key={i} value={item} >{item}</option>
                )
            }, this);

        return (
            <div className="donations-list">
                <div>
                    <select onChange={(e) => this.onSetFilter(e)}>
                        {donationStatusesList}
                    </select>
                </div>
                <table className="donations-table">
                    <thead className="donations-table-head">
                        <tr className="donations-table-head-row">
                            <th>סטאטוס תשלום</th>
                            <th>סטאטוס</th>
                            <th>תאריך הובלה</th>
                            <th>אופן ההובלה</th>
                            <th>שם הארגון</th>
                            <th>תאריך פניה</th>
                        </tr>
                    </thead>
                    <tbody className="donations-table-body">
                        {this.state.donations.map((donation) => (
                            <DonationSummary key={donation.id} donation={donation} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DonationsList;