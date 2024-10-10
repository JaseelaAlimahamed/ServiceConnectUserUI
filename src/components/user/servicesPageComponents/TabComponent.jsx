import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TabComponent = ({ tabs, initialTab, children }) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    return (
        <div className="w-full max-w-lg mx-auto font-bold mt-28">
            <div className="flex justify-between p-2 mb-5 rounded-2xl bg-medium-gray" role="tablist">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={`w-full py-2 rounded-2xl ${activeTab === tab.key ? 'bg-white text-black' : 'bg-transparent text-white'
                            }`}
                        onClick={() => setActiveTab(tab.key)}
                        role="tab"
                        aria-selected={activeTab === tab.key}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">{children(activeTab)}</div>
        </div>
    );
};

TabComponent.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    initialTab: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
};

export default TabComponent;
