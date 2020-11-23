import React from 'react';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
        console.log("comments", this.state.comments);
        setTimeout(() => {
            this.props.history.push({
                pathname: './closedonation',
                // state: {
                //     user: this.state.comments
                // }
            })
        }, 2000)
    };

    render(){
        const {comments } = this.state;
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
                        {/* <textarea className={"form-control"} aria-label={"With textarea"} defaultValue={text} ref={this.textInput} /> */}


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