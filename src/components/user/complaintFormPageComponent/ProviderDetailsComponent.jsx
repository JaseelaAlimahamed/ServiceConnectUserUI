import React from 'react'

function ProviderDetailsComponent({ServiceProvider}) {
  return (
    <div className="flex items-center mb-6">
    <img
        src={ServiceProvider.image}
        alt="Profile"
        className="rounded-full w-14 h-14"
    />
    <div className="ml-3">
        <h3 className="text-lg font-semibold">{ServiceProvider.name}</h3>
        <p className="text-gray-500 text-sm">{ServiceProvider.designation}</p>
    </div>
</div>
)
}

export default ProviderDetailsComponent