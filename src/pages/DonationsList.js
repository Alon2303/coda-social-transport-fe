import React, { Component } from 'react';
import DonationSummary from '../components/donations/DonationSummary';

// Services
import donationService from '../services/donationService';

class DonationsList extends Component {
    state = {
        donations: []
    }

    async componentDidMount() {
        const donations = await donationService.query();
        this.setState({ donations });
    };

    render() {
        return (
            <div className="donations-list">
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
                            <DonationSummary key={donation.id} donation={donation} key={donation.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DonationsList;