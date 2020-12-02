import React from 'react';

class CloseDonation extends React.Component{

    render(){
        return (
            <div className={"container fluid"}>
            <div className={"d-flex justify-content-center"}>
                <div className={"text-right"}>
                        <p>התרומה הושלמה</p>
                        <p>!תודה רבה</p>
                        <p>מייל אישור על קבלת התרומה נשלח אלייך ברגעים אלו</p>
                    </div>
                </div>  
            </div>
        )
    }
}

export default CloseDonation;