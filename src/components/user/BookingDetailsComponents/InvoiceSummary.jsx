// src/components/InvoiceSummary.js
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { fetchInvoiceDetails } from '../../../services/api/invoiceSummaryAPI';

const InvoiceSummary = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getInvoiceData = async () => {
      try {
        const data = await fetchInvoiceDetails(id);
        setInvoiceData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getInvoiceData();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center">Loading invoice details...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 text-center">
        Error loading invoice: {error}
      </div>
    );
  }

  if (!invoiceData) {
    return <div className="p-4 text-center">No invoice data available</div>;
  }

  const formattedDate = invoiceData.appointment_date ? 
    format(new Date(invoiceData.appointment_date), 'MMM dd, yyyy') : '';
  const formattedTime = invoiceData.appointment_date ? 
    format(new Date(invoiceData.appointment_date), 'h:mm a') : '';

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-6 mt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Invoice #{invoiceData.invoice_number}</h2>
        <div className="text-sm text-gray-600">
          <div>Invoice Date: {format(new Date(invoiceData.invoice_date), 'MMM dd, yyyy')}</div>
          {invoiceData.due_date && (
            <div>Due Date: {format(new Date(invoiceData.due_date), 'MMM dd, yyyy')}</div>
          )}
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold mb-4">Appointment</div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 p-4 rounded-md text-center">
            <span className="block font-medium">{formattedDate}</span>
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center">
            <span className="block font-medium">{formattedTime}</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Sl.no</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-right">Qty</th>
              <th className="px-4 py-2 text-right">Price</th>
              <th className="px-4 py-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">{invoiceData.service_request}</td>
              <td className="px-4 py-2">Service</td>
              <td className="px-4 py-2 text-right">{invoiceData.quantity}</td>
              <td className="px-4 py-2 text-right">₹{Number(invoiceData.price).toFixed(2)}</td>
              <td className="px-4 py-2 text-right">₹{Number(invoiceData.total_amount).toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t">
              <td colSpan="4" className="px-4 py-2 text-right font-semibold">Grand Total</td>
              <td className="px-4 py-2 text-right font-semibold">₹{Number(invoiceData.total_amount).toFixed(2)}</td>
            </tr>
            {invoiceData.payment_balance > 0 && (
              <tr className="border-t text-red-600">
                <td colSpan="4" className="px-4 py-2 text-right font-semibold">Balance Due</td>
                <td className="px-4 py-2 text-right font-semibold">₹{Number(invoiceData.payment_balance).toFixed(2)}</td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Terms and conditions</h3>
        <p className="text-sm text-gray-600">Valid up to 1 month</p>
      </div>

      {invoiceData.additional_requirements && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Additional Requirements</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-700">{invoiceData.additional_requirements}</p>
          </div>
        </div>
      )}

      {invoiceData.accepted_terms && (
        <div className="mt-4 text-sm text-gray-600">
          <span className="flex items-center">
            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Terms & Conditions Accepted
          </span>
        </div>
      )}
    </div>
  );
};

export default InvoiceSummary;
