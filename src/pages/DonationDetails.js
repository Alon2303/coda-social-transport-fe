import React, { Component } from 'react';
// import { connect } from 'react-redux';


// Services
import donationService from '../services/donationService';

// Components
import ImagesGallery from '../components/donations/ImagesGallery';
import DonationTags from '../components/donations/DonationTags';

class DonationDetails extends Component {
    state = {
        donation: {},
        isEditing: false,
        tags: []
    };
    async componentDidMount() {
        const { id } = this.props.match.params;
        const donation = await donationService.getById(id);
        this.setState({ ...this.state, donation: donation })
    }

    render() {
        const { donation } = this.state;
        return (
            (
                donation.id ?
                    <div>
                        <header className='donation-details'>
                            <div className='donation-details donation-header-right'>
                                <section>תאריך פנייה: {donation.date}</section>
                                <section>{donation.status}</section>
                            </div>
                            <div className='donation-header-left'>
                                <img className='donor-logo' src={require(`../${donation.logo}`)} alt='donor-logo' />
                                <section>{donation.donorName}</section>
                            </div>
                        </header>

                        <section className='donation-items'>
                            {donation.items.map((item, i) => (
                                <section key={i}>
                                    <div className='item-info'>
                                        <section>Count: {item.count}</section>
                                        <DonationTags tag={item.tag} donationId={donation.id} itemIdx={i} />
                                    </div>
                                    <ImagesGallery images={item.images} />
                                </section>
                            ))}
                        </section>
                        <section className='donation-details-bottom'>

                            <div>
                                {donation.shippingMethod}
                            </div>
                            <div>
                                {donation.shippingDate}
                            </div>
                            <div>
                                כתובת איסוף: {donation.pickupAddress}
                            </div>
                            <div>
                                סטאטוס תשלום: {donation.paymentStatus}
                            </div>
                        </section>
                    </div>
                    :
                    <div>no donation found</div>
            )
        );
    }
}

export default DonationDetails;