import React, { Component } from 'react';
import { connect } from 'react-redux';

// Services
import donationService from '../../services/donationService';
import { saveDonation } from '../../store/actions/donationActions';


class DonationTags extends Component {
    state = {
        tags: []
    }

    componentDidMount() {
        let tags = [];
        tags.push(this.props.tag);
        this.setState({
            tags: [
                ...tags,
                'מזון', 'ביגוד', 'ריהוט', 'כללי'
            ]
        });
    }

    onSetTag = async (e) => {
        const selectedTag = e.target.value;
        const { donation, itemIdx } = this.props;
        let updatedDonation = await donationService.updateTag(donation._id, itemIdx, selectedTag);
        await this.props.saveDonation(updatedDonation);
    }

    render() {
        const { tags } = this.state;
        this.onSetTag = this.onSetTag.bind(this);
        let tagsList = tags.length > 0
            && tags.map((item, i) => {
                return (
                    <option key={i} value={item} >{item}</option>
                )
            }, this);

        return (
            <div>
                <select onChange={(e) => this.onSetTag(e)}>
                    {tagsList}
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = {
    saveDonation
};

export default connect(null, mapDispatchToProps)(DonationTags);