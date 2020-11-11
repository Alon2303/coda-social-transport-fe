import React from 'react';

class Wellcome extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            user : this.props.location.state.user
        }
    }

    donate = () =>{
        setTimeout(() => {
            this.props.history.push({
                pathname: './newdonation',
                state: {
                    user: this.state.user
                }
            })
        }, 2000)
    };

    render(){
        const {user} = this.state;
        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <h6>!תורם חדש נולד</h6>
                        <p>{user.name} ,שלום</p>
                        <p>שמחים שהצטרפת לשינוי חברתי</p>
                    </div>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <button onClick={this.donate}>
                        <img src={require('../../images/buttons/img1.png')} alt={"logo"} height={"100px"}/>
                    </button>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <button>
                        <img src={require('../../images/buttons/img2.png')} alt={"logo"} height={"100px"}/>
                    </button>
                </div>  
            </div>
        )
    }
}

export default Wellcome;