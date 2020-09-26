import React from 'react';

class Confirmation extends React.Component {

    render(){
        return (
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center"}>
                    <div>
                    <h6>כיף שהצטרפת!</h6>
                        <p>Thank you!!!</p>
                        <button >לתרומת ציוד</button>
                        <button>לתרומה כספית</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirmation;