// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import TransactionCard from "./TransactionCard";

// const TransactionsPageUser = () => {
//   const [transactions, setTransactions] = useState([]); // Store transaction data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const serviceImg =
//     "https://img.freepik.com/premium-photo/abstract-black-dark-wall_73523-3758.jpg?ga=GA1.1.1459516267.1711715282&semt=ais_hybrid";

//   useEffect(() => {
//     // Fetch the transaction data from the backend API 
//     axios
//       .get("http://127.0.0.1:8000/customer/transactions/", {
//         headers: {
//           Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjYwMjE1LCJpYXQiOjE3MzE2NTg0MTUsImp0aSI6IjY1NjQ0YTA5MWYxZTQ4ZDc4NmM4ZGExYWRhOWZjY2Y1IiwidXNlcl9pZCI6N30.hcsyROg7N7zRiv69coa92D9jFOt6xQVTI7yKKb-glzE"}`, // Replace with your token
//         },
//       })
//       .then((response) => {
//         setTransactions(response.data); // Store the data in state
//         setLoading(false); // Set loading to false once the data is fetched
//       })
//       .catch((err) => {
//         setError("Failed to load transactions");
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-light-gray flex items-center flex-col p-4">
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-screen-xl">
//           {transactions.length === 0 ? (
//             <div className="col-span-full text-center p-4">
//               <p className="text-lg font-semibold">
//                 No Transactions available.
//               </p>
//             </div>
//           ) : (
//             transactions.map((transaction, index) => {
//               return (
//                 <TransactionCard
//                   key={index}
//                   serviceTitle={transaction.service_request} // Assuming service_request is the title
//                   method={transaction.payment_method} // Assuming payment_method is the category
//                   serviceImg={serviceImg}
//                   transactionId={transaction.transaction_id} // Pass transaction ID
//                   paymentStatus={transaction.payment_status} // Pass payment status
//                 />
//               );
//             })
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
// export default TransactionsPageUser;

import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionCard from "./TransactionCard";

const TransactionsPageUser = () => {
  const [transactions, setTransactions] = useState([]); // Store transaction data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const serviceImg =
    "https://img.freepik.com/premium-photo/abstract-black-dark-wall_73523-3758.jpg?ga=GA1.1.1459516267.1711715282&semt=ais_hybrid";

  useEffect(() => {
    // Fetch the transaction data from the backend API 
    axios
      .get("https://learnbudsgvr.pythonanywhere.com/customer/transactions/", {
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjYwMjE1LCJpYXQiOjE3MzE2NTg0MTUsImp0aSI6IjY1NjQ0YTA5MWYxZTQ4ZDc4NmM4ZGExYWRhOWZjY2Y1IiwidXNlcl9pZCI6N30.hcsyROg7N7zRiv69coa92D9jFOt6xQVTI7yKKb-glzE`,
          'Content-Type': 'application/json',
      },
      })
      .then((response) => {
        setTransactions(response.data); // Store the data in state
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((err) => {
        setError("Failed to load transactions");
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs once after the first render

  return (
    <div className="min-h-screen bg-light-gray flex items-center flex-col p-4">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-screen-xl">
          {transactions.length === 0 ? (
            <div className="col-span-full text-center p-4">
              <p className="text-lg font-semibold">
                No Transactions available.
              </p>
            </div>
          ) : (
            transactions.map((transaction, index) => {
              return (
                <TransactionCard
                  key={index}
                  serviceTitle={transaction.service_request} // Assuming service_request is the title
                  method={transaction.payment_method} // Assuming payment_method is the category
                  serviceImg={serviceImg}
                  transactionId={transaction.transaction_id} // Pass transaction ID
                  paymentStatus={transaction.payment_status} // Pass payment status
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionsPageUser;
