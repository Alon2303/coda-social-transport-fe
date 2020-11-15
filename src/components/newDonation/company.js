import React from 'react';

class Company extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            companyName:'',
            selectedFile: null
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
            selectedFile: e.target.files[0],
            loaded: 0
        })
    };

    sendDetailsDone = (e) =>{
        setTimeout(() => {
            this.props.history.push({
                state: {
                    items: [],
                    currentItem: 1,
                    imgCounter: 0,
                    files: this.props.location.state.files,
                }
            })
        }, 2000)
    };

    sendDetails = async e => {
        e.preventDefault();
        const {companyName, selectedFile}  = this.state;
        // const {companyName, selectedFile} = this.state;
        // const company = await addUserToDB(companyName, selectedFile);
        this.sendDetailsDone();
    };

    render(){
        console.log("companyName", this.state.companyName);

        const {companyName, selectedFile} = this.state;
        return(
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <img src={require('../../images/logo.png')} alt={"logo"} height={"100px"}/>
                        <h6>פרטי חברה</h6>
                        <div className={"text-center"} style={{backgroundColor:"white"}}>
                            <div>
                            <p>שם החברה התורמת</p>
                                <input type={"text"} name={"companyName"} onChange={this.handleChange}/>
                            </div>
                            <hr />
                                <p>הוספת לוגו של החברה</p>
                                <input type={"file"} name={"companyLogo"} onChange={this.handleUpload}/>
                                {/* <button type={"button"} onClick={this.handleClick}>Upload</button> */}
                            </div>
                            <br/>
                            { companyName && selectedFile &&
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