import React from 'react';

function EmploymentType({employmentType}) {
    return (
        <div className="flex gap-2">
            {employmentType.map((type, index) => (
                <div
                    key={index}
                    className="additional__button w-56 h-12 flex justify-center items-center bg-sky-100"
                >
                    {type}
                </div>
            ))}
        </div>
    );
}

export default EmploymentType;