import React, { Component } from 'react';
// import { connect } from 'react-redux';

// Services
import donationService from '../services/donationService';

// Components
import ImagesGallery from '../components/donations/ImagesGallery';
import DonationTags from '../components/donations/DonationTags';
import Editable from '../components/donations/Editable';
import AcceptItemToggle from '../components/donations/AcceptItemToggle';
import ShipmentCoordination from '../components/donations/ShipmentCoordination';

class DonationDetails extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.textareaRef = React.createRef();
    }
    state = {
        donation: {},
        isEditing: false,
        tags: [],
        itemsCount: [],
        items: []
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items !== this.state.items) {
            console.log('been updated.')
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const donation = await donationService.getById(id);
        const itemsCount = [];
        for (let i = 0; i < donation.items.length; i++) {
            let currItemCount = donation.items[i].count;
            itemsCount.push(currItemCount);
        }
        this.setState({ ...this.state, donation: donation, itemsCount: itemsCount, items: donation.items })
    }

    handleCountChange = (e) => {
        console.log(e.target.value);
    }

    setCount = (itemIdx, updatedCount) => {
        const updateCounts = this.state.itemsCount;
        updateCounts[itemIdx] = +updatedCount;
        this.setState({ ...this.state, itemsCount: updateCounts });
        const { id } = this.props.match.params;
        donationService.updateItemCount(id, itemIdx, +updatedCount);
    }

    render() {
        const { donation, itemsCount } = this.state;

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
                                        <section className='item-count'>Count:
                                            <Editable className='item-count-value'
                                                text={itemsCount[i]}
                                                childRef={this.inputRef}
                                                type='number'
                                            >
                                                <input
                                                    ref={this.inputRef}
                                                    type='number'
                                                    name='count'
                                                    value={itemsCount[i]}
                                                    onChange={e => this.setCount(i, e.target.value)}
                                                />
                                            </Editable>
                                        </section>

                                        <DonationTags tag={item.tag} donationId={donation.id} itemIdx={i} />
                                    </div>
                                    <ImagesGallery images={item.images} />
                                    <AcceptItemToggle donationId={donation.id} itemIdx={i} item={item} />
                                    <section>Donor comments: {item.comments}</section>
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
                                {(donation.shippingMethod === 'זקוקים להובלה') ? <ShipmentCoordination /> : ''}
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