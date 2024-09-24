import { FaThLarge, FaFileAlt, FaRedo, FaPlus, FaQuestionCircle, FaLayerGroup } from 'react-icons/fa';

/**
 * Bottom navigation bar for mobile view.
 * Includes six buttons with icons, each for different actions.
 * The navigation bar is fixed at the bottom of the screen on mobile devices.
 */
const BottomNavBar = () => {
    return (
        <div className="fixed inset-x-0  flex items-center justify-around px-5 py-3 mx-10 mb-2 bg-[#736a68] shadow-lg bottom-2 rounded-xl sm:hidden">
            {/* Home/Overview Button */}
            <button className="p-0 m-0 text-white bg-transparent focus:outline-none">
                <FaThLarge size={24} />
            </button>
            {/* File/Document Button */}
            <button className="p-0 m-0 text-white bg-transparent focus:outline-none">
                <FaFileAlt size={24} />
            </button>
            {/* Reload/Redo Button */}
            <button className="p-0 m-0 text-white bg-transparent focus:outline-none">
                <FaRedo size={24} />
            </button>
            {/* Layer Group Button */}
            <button className="p-0 m-0 text-white bg-transparent focus:outline-none">
                <FaLayerGroup size={24} />
            </button>
            {/* Add/New Button */}
            <button className="p-0 m-0 text-white bg-transparent focus:outline-none">
                <FaPlus size={24} />
            </button>
            {/* Help/Info Button */}
            <button className="p-0 m-0 text-white bg-transparent focus:outline-none">
                <FaQuestionCircle size={24} />
            </button>
        </div>
    );
};

export default BottomNavBar;
