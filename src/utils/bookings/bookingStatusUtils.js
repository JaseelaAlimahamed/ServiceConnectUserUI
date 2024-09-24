export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'accepted':
      return 'bg-green-700';
    case 'rejected':
      return 'bg-red-700';
    case 'pending':
      return 'bg-dark-gray';
    default:
      return 'bg-dark-gray';
  }
};

export const mapStatus = (status) => {
  switch (status.toLowerCase()) {
    case 'accepted':
      return 'scheduled';
    case 'rejected':
      return 'rejected';
    case 'pending':
      return 'booked';
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
    default:
      return { text: 'Unknown Status', disabled: true };
  }
};
