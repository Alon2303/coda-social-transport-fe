import React from 'react';
import { addDonationToDB } from '../../../../api/sendDonation'

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alternativeShippingDate: null,
            status: 'חדש',
            awaitingPaymeny: null,
            paymentStatus: null,
            donorName: this.props.location.state.donorName,
            logo: this.props.location.state.logo,             
            items: this.props.location.state.items,
            contact:{
                contactName: this.props.location.state.contactName,
                phone: this.props.location.state.phone
            },
            shippingDateStart: this.props.location.state.shippingDateStart,
            shippingDateEnd: this.props.location.state.shippingDateEnd,
            pickUpAddress: this.props.location.state.pickUpAddress,
            shippingMethod: this.props.location.state.shippingMethod,
            comments: ''
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    };

    signupProcess = async e => {
        e.preventDefault();
        const {alternativeShippingDate, status, awaitingPaymeny, paymentStatus, donorName,logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress,shippingMethod, comments} = this.state;
        const donation = await addDonationToDB(alternativeShippingDate, status, awaitingPaymeny, paymentStatus, donorName,logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress,shippingMethod, comments);
        console.log("donation", donation);
        setTimeout(() => {
            this.props.history.push({
                pathname: './closedonation',
            })
        }, 2000)
    };

    render(){
        //const {comments, contactName, shippingDateStart,contact} = this.state;

        return (
        <form className={"container fluid"} onSubmit={this.handleSubmit}>
            <div className={"d-flex justify-content-center"}>
                <div className={"text-right"}>
                    <h6>כותרת</h6>
                    <div className={"text-center"} style={{backgroundColor:"white"}}>
                        <div>
                            <p>האם יש לך הערות להוסיף להזמנה? </p>
                            <textarea className={"form-control"} aria-label={"With textarea"} type={"text"} name={"comments"} onChange={this.handleChange}/>
                        </div>
                        <hr />
                        <div>
                            <button type={"submit"} onClick={this.signupProcess}>סיום הזמנה</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        )
    }
}

export default Comments;