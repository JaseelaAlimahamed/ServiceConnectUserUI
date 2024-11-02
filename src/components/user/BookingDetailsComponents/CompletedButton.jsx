import React from 'react';


const CompletedButton = ({work_status}) => {
  return (
    <div className="bg-secondary text-primary w-full py-4 mt-6 rounded-full text-sm md:text-base flex items-center justify-between px-4">
                    <span className="flex-grow text-center">{work_status}</span>
                </div>
  );
};

export default CompletedButton;