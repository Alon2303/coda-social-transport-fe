import React from 'react';
import { connect } from 'react-redux';

// Services
import donorDonationService from '../../../../../services/donorDonationService';
import { setNewDonation } from '../../../../../store/actions/donationActions';

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donorName: '',
            logo: null,
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    handleUpload = (e) => {
        this.setState({
            logo: e.target.files[0],
            loaded: 0
        })
    };

    sendDetailsDone = (e) => {
        let donationTemplate = donorDonationService.getNewDonationTemplate();
        donationTemplate['donorName'] = this.state.donorName;
        donationTemplate['logo'] = this.state.logo;
        this.props.setNewDonation(donationTemplate);
        this.props.history.push({ pathname: './donoritems' })
    };

    sendDetails = async e => {
        e.preventDefault();
        this.sendDetailsDone();
    };

    render() {
        const { donorName, logo } = this.state;

        return (
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <img src={require('../../../../../images/logo.png')} alt={"logo"} height={"100px"} />
                        <h6>פרטי חברה</h6>
                        <div className={"text-center"} style={{ backgroundColor: "white" }}>
                            <div>
                                <p>שם החברה התורמת</p>
                                <input type={"text"} name={"donorName"} onChange={this.handleChange} />
                            </div>
                            <hr />
                            <p>הוספת לוגו של החברה</p>
                            <input type={"file"} name={"logo"} onChange={this.handleUpload} />
                            {/* <button type={"button"} onClick={this.handleClick}>Upload</button> */}
                        </div>
                        <br />
                        {donorName && logo &&
                            <div>
                                <button type={"submit"} onClick={this.sendDetails}>מאושר, המשך/י</button>
                            </div>
                        }
                    </div>

                </div>
            </form>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        donation: state.donation.currDonation,
    };
};

const mapDispatchToProps = {
    setNewDonation
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);