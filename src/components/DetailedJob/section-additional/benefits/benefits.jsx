import React from 'react';

function Benefits({benefits}) {
    return (
        <div className="flex gap-2">
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className="additional__button w-56 h-12 flex justify-center items-center bg-orange-100"
                >
                    {benefit}
                </div>
            ))}
        </div>
    );
}

export default Benefits;