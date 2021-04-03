import React, { Component } from 'react';
import { connect } from 'react-redux';

// Services
import adminDonationService from '../services/adminDonationService';

import { loadDonationById, saveDonation } from '../store/actions/donationActions';

// Components
import ImagesGallery from '../components/adminDonationDetails/ImagesGallery';
import DonationTags from '../components/adminDonationDetails/DonationTags';
import Editable from '../components/adminDonationDetails/Editable';
import AcceptItemToggle from '../components/adminDonationDetails/AcceptItemToggle';
import ShipmentCoordination from '../components/adminDonationDetails/ShipmentCoordination';
import DonationRowActionBtns from '../components/adminDonationList/DonationRowActionBtns';

class DonationDetails extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.textareaRef = React.createRef();
    }

    componentDidMount = async () => {
        await this.loadDonation();
    }

    loadDonation = async () => {
        const { id } = this.props.match.params;
        const donation = await this.props.loadDonationById(id);
        return donation;
    };

    setCount = async (itemIdx, updatedCount) => {
        const { id } = this.props.match.params;
        const updatedDonation = await adminDonationService.updateItemCount(id, itemIdx, +updatedCount);
        await this.props.saveDonation(updatedDonation);
        await this.props.loadDonationById(id);

    }

    render() {
        const { donation } = this.props;

        return (
            (
                !donation ?
                    <div>no donation found</div>
                    :
                    <div>
                        <header className='donation-details'>
                            <div className='donation-details donation-header-right'>
                                <section>תאריך פנייה: {donation.date}</section>
                                <section>{donation.status}</section>
                            </div>
                            <div className='donation-header-left'>
                                {/* <img className='donor-logo' src={require(`../${donation.logo}`)} alt='donor-logo' /> */}
                                <section>{donation.donorName}</section>
                            </div>
                        </header>

                        <section className='donation-items'>
                            {donation.items.map((item, i) => (
                                <section key={i}>
                                    <div className='item-info'>
                                        <section className='item-count'>Count:
                                            <Editable className='item-count-value'
                                                text={donation.items[i].count}
                                                childRef={this.inputRef}
                                                type='number'
                                            >
                                                <input
                                                    ref={this.inputRef}
                                                    type='number'
                                                    name='count'
                                                    value={donation.items[i].count}
                                                    onChange={e => this.setCount(i, e.target.value)}
                                                />
                                            </Editable>
                                        </section>

                                        <DonationTags tag={item.tags} donation={donation} itemIdx={i} />
                                    </div>
                                    {/* <ImagesGallery images={item.images} /> */}
                                    <AcceptItemToggle donationId={donation._id} itemIdx={i} item={item} />
                                    <section>Donor comments: {item.comment}</section>
                                </section>
                            ))}
                        </section>
                        <section className='donation-details-bottom'>

                            <div>
                                {donation.shippingMethod}
                            </div>
                            <div>
                                Start date: {donation.shippingDateStart}
                            </div>
                            <div>
                                End date: {donation.shippingDateStart}
                            </div>
                            <div>
                                {(donation.shippingMethod === 'זקוקים להובלה') ? <ShipmentCoordination /> : ''}
                            </div>
                            <div>
                                כתובת איסוף: {donation.pickUpAddress}
                            </div>
                            <div>
                                סטאטוס תשלום: {donation.paymentStatus}
                            </div>
                        </section>
                        <section>
                            <DonationRowActionBtns key={donation._id} donation={donation} classRow={'show-row-action-btns'} />
                        </section>
                    </div>
            )
        );
    }
}


const mapStateToProps = (state) => {
    console.log('PROPS IN DETAILS : ', state.donation.currDonation);
    return {
        donation: state.donation.currDonation,
    };
};

const mapDispatchToProps = {
    loadDonationById,
    saveDonation
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationDetails);