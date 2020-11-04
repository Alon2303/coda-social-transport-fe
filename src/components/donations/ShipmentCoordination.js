import React, { useState } from 'react';
import AlternativeShipmentDate from './AlternativeShipmentDate';

const ShipmentCoordination = () => {

    const [shipmentAccepted, setShipmentAccepted] = useState('');


    const handleShipmentAccept = (e) => {
        const newValue = e.target.value;
        setShipmentAccepted(newValue);
        // const { donationId, itemIdx } = props;
        // donationService.updateItemAccept(donationId, itemIdx, newValue);
    }

    return (
        <div>
            <section className="shipment-toggle">

                <p>המשאית של שינוע חברתי פנויה בתאריכים המבוקשים?</p>
                <button value="yes" onClick={(e) => handleShipmentAccept(e)}
                    className={(shipmentAccepted === 'yes') ? 'shipment-toggle-selected' : ''}
                >כן
            </button>
                <button value="no" onClick={(e) => handleShipmentAccept(e)}
                    className={(shipmentAccepted === 'no') ? 'shipment-toggle-selected' : ''}
                >לא
            </button>
            </section>
            {(shipmentAccepted === 'no') ? (
                <section>
                    <p>תאריך חילופי לתאריך ___ בטווח השעות החל מ - עד ...</p>
                    <AlternativeShipmentDate />
                </section>)
                : ''}
        </div>
    );
}

export default ShipmentCoordination;