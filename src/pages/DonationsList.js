import React, { Component } from 'react';
import { connect } from 'react-redux';

import DonationSummary from '../components/adminDonationList/DonationSummary';

import { loadDonations } from '../store/actions/donationActions';

class DonationsList extends Component {
    state = {
        status: 'Open donations',
        donationStatuses: ['Open donations', 'Closed donations', 'Archived donations', 'All donations']
    }

    async componentDidMount() {
        await this.getDonations();
    };

    onSetFilter = (e) => {
        const selectedStatus = e.target.value;
        this.setState({ ...this.state, status: selectedStatus }, async function () {
            await this.getDonations();
        });
    }

    async getDonations() {
        const filterBy = { status: this.state.status }
        await this.props.loadDonations(filterBy);
    }

    render() {
        const { donationStatuses } = this.state;
        const { donations } = this.props;
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
                <table className="donations-table" dir="rtl">
                    <thead className="donations-table-head">
                        <tr className="donations-table-head-row">
                            <th>תאריך פניה</th>
                            <th>שם הארגון</th>
                            <th>אופן ההובלה</th>
                            <th>תאריך הובלה</th>
                            <th>סטאטוס</th>
                            <th>סטאטוס תשלום</th>
                            <th>פעולות  </th>
                        </tr>
                    </thead>
                    <tbody className="donations-table-body">
                        {donations.map((donation) => (
                            <DonationSummary key={donation.id} donation={donation} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        donations: state.donation.donations
    };
};

const mapDispatchToProps = {
    loadDonations
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationsList);