import React from 'react';

class Confirmation extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name : this.props.location.state.name
        }
    }

    donate = () =>{
        setTimeout(() => {
            this.props.history.push({
                pathname: './wellcome'
            })
        }, 2000)
    };

    render(){
        const {name} = this.state;
        return (
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <h6>!תורם חדש נולד</h6>
                        <p>{name} ,שלום</p>
                        <p>שמחים שהצטרפת לשינוע חברתי</p>
                    </div>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <button onClick={this.donate}>לתרומה חדשה </button>
                </div>
            </div>
        )
    }
}

export default Confirmation;