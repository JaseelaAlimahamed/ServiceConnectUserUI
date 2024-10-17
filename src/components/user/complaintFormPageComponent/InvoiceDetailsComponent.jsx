import React from 'react';

function InvoiceDetailsComponent({ InvoiceDetails }) {
    return (
        <div className='mt-5'>
            <h1 className='text-lg font-semibold mb-4 text-indigo-custom'>Invoice</h1>
            <table className="min-w-full bg-white text-indigo-custom">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-left">Sl. No</th>
                        <th className="py-2 px-4 text-left">Description</th>
                        <th className="py-2 px-4 text-center">Qty</th>
                        <th className="py-2 px-4 text-right">Price</th>
                        <th className="py-2 px-4 text-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 text-left">1</td>
                        <td className="py-2 px-4 text-left">{InvoiceDetails.description}</td>
                        <td className="py-2 px-4 text-center">{InvoiceDetails.quantity}</td>
                        <td className="py-2 px-4 text-right">₹{InvoiceDetails.price}</td>
                        <td className="py-2 px-4 text-right">₹{InvoiceDetails.Total}</td>
                    </tr>

                    <tr>
                        <td colSpan="4" className="py-2 px-4 text-right font-bold">Grand Total</td>
                        <td className="py-2 px-4 text-right font-bold">₹{InvoiceDetails.grandTotal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InvoiceDetailsComponent;
