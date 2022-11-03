import React from 'react';

function Benefits({benefits}) {
    return (
        <div className="flex  gap-2">
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className="additional__button text-xs sm:text-base w-28   sm:w-56   w-56 h-12 text-yellow-600 border-yellow-300 border-2 rounded-lg font-medium flex justify-center items-center bg-yellow-100"
                >
                    {benefit}
                </div>
            ))}
        </div>
    );
}

export default Benefits;