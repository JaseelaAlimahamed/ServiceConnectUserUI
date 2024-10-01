import React from "react";
import { Field, ErrorMessage } from "formik";

const AvailabilityComponent = () => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Availability</label>
            <div className="flex flex-col">
                {/* From Date & Time */}
                <div className="flex-1">
                    <label className="block text-sm text-gray-600">From</label>
                    <div className="flex space-x-2 mt-2">
                        <div className="relative flex-1 ">
                            <div className="h-14 bg-white rounded-md pt-2">
                                <p className="text-xs text-gray-500 pl-3">Date</p>
                                <Field
                                    type="date"
                                    name="fromDate"
                                    className="w-full p-3 border h-5 border-gray-300 rounded-lg focus:outline-none border-none"
                                />
                            </div>
                            <ErrorMessage
                                name="fromDate"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        <div className="relative flex-1">
                            <div className="h-14 bg-white rounded-md pt-2">
                                <p className="text-xs text-gray-500 pl-3">Date</p>
                                <Field
                                    type="time"
                                    name="fromTime"
                                    className="w-full p-3 border h-5 border-gray-300 rounded-lg focus:outline-none border-none"
                                />
                            </div>

                            <ErrorMessage
                                name="fromTime"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                    </div>
                </div>

                {/* To Date & Time */}
                <div className="flex-1 mt-4">
                    <label className="block text-sm text-gray-600">To</label>
                    <div className="flex space-x-2 mt-2">
                        <div className="relative flex-1 ">
                            <div className="h-14 bg-white rounded-md pt-2">
                                <p className="text-xs text-gray-500 pl-3">Date</p>
                                <Field
                                    type="date"
                                    name="toDate"
                                    className="w-full p-3 border h-5 border-gray-300 rounded-lg focus:outline-none border-none "
                                />
                            </div>
                            <ErrorMessage
                                name="toDate"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        <div className="relative flex-1 ">
                            <div className="h-14 bg-white rounded-md pt-2">
                                <p className="text-xs text-gray-500 pl-3">Time</p>
                                <Field
                                    type="time"
                                    name="toTime"
                                    className="w-full p-3 border h-5 border-gray-300 rounded-lg focus:outline-none border-none"
                                />
                            </div>
                            <ErrorMessage
                                name="toTime"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailabilityComponent;
