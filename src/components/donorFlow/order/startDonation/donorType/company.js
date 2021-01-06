import React from 'react';
 
class Company extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            donorName:'',
            logo: null
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    };

    handleUpload = (e)=>{
        this.setState({
            logo: e.target.files[0],
            loaded: 0
        })
    };

    sendDetailsDone = (e) =>{
        const {donorName, logo} = this.state;
        setTimeout(() => {
            this.props.history.push({
                pathname: './newitem',
                state: {
                    donorName,
                    logo,      
                    items: [],
                    currentItem: 1,
                    imgCounter: 0,
                    images: []
                }
            })
        }, 2000)
    };

    sendDetails = async e => {
        e.preventDefault();
        const {donorName, logo}  = this.state;
        this.sendDetailsDone();
    };

    render(){
        const {donorName, logo} = this.state;
        console.log("donorName", donorName);
        return(
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <img src={require('../../../../../images/logo.png')} alt={"logo"} height={"100px"}/>
                        <h6>פרטי חברה</h6>
                        <div className={"text-center"} style={{backgroundColor:"white"}}>
                            <div>
                            <p>שם החברה התורמת</p>
                                <input type={"text"} name={"donorName"} onChange={this.handleChange}/>
                            </div>
                            <hr />
                                <p>הוספת לוגו של החברה</p>
                                <input type={"file"} name={"logo"} onChange={this.handleUpload}/>
                                {/* <button type={"button"} onClick={this.handleClick}>Upload</button> */}
                            </div>
                            <br/>
                            { donorName && logo &&
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

export default Company;