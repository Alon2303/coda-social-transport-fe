import React, { Component } from 'react';

// Services
import donationService from '../../services/donationService';

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
    onSetTag = (e) => {
        const selectedTag = e.target.value;
        const { donationId, itemIdx } = this.props;
        donationService.updateTag(donationId, itemIdx, selectedTag);

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

export default DonationTags;