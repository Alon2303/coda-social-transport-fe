import React, { useState } from 'react';

const AlternativeShipmentDate = () => {

    const [externalShipmentAccepted, setExternalShipmentAccepted] = useState('');


    const handleExternalShipmentAccept = (e) => {
        const newValue = e.target.value;
        setExternalShipmentAccepted(newValue);
        // const { donationId, itemIdx } = props;
        // donationService.updateItemAccept(donationId, itemIdx, newValue);
    }

    return (
        <div>
            <section className="shipment-toggle">
                <p>האם להציע הובלה חיצונית בתשלום, בטווח התאריכים הרצוי?</p>
                <button value="yes" onClick={(e) => handleExternalShipmentAccept(e)}
                    className={(externalShipmentAccepted === 'yes') ? 'shipment-toggle-selected' : ''}
                >כן
        </button>
                <button value="no" onClick={(e) => handleExternalShipmentAccept(e)}
                    className={(externalShipmentAccepted === 'no') ? 'shipment-toggle-selected' : ''}
                >לא
        </button>
            </section>
        </div>

    );
}

export default AlternativeShipmentDate;