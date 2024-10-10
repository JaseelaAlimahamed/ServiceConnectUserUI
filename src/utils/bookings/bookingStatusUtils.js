export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'scheduled':
      return 'bg-green-700';
    case 'rejected':
      return 'bg-red-700';
    case 'booked':
      return 'bg-dark-gray';
    case 'active':
      return 'bg-green-700';
    case 'completed':
      return 'bg-blue-700';
    case 'pending':
      return 'bg-green-700';
    case 'resolved':
      return 'bg-green-700';
    default:
      return 'bg-dark-gray';
  }
};

export const mapStatus = (status) => {
  switch (status.toLowerCase()) {
    case 'accepted':
      return 'Scheduled';
    case 'rejected':
      return 'Rejected';
    case 'pending':
      return 'Booked';
    case 'active':
      return 'Active';
    case 'completed':
      return 'Completed';
    case 'requested':
      return 'Pending';
    case 'resolved':
      return 'Resolved';
    default:
      return status.toLowerCase();
  }
};

export const getButtonDetails = (status) => {
  switch (status.toLowerCase()) {
    case 'scheduled':
      return { text: 'Accept and Pay Advance', disabled: false };
    case 'rejected':
      return { text: 'Provider Rejected', disabled: true };
    case 'booked':
      return { text: 'Waiting for Response', disabled: true };
    case 'active':
      return { text: 'Complete Payment', disabled: false };
    case 'completed':
      return { text: 'Completed', disabled: true };
    case 'pending':
      return { text: 'Chat / Call', disabled: false };
    case 'resolved':
      return { text: 'Complete Payment', disabled: false };
    default:
      return { text: 'Unknown Status', disabled: true };
  }
};
