import React from 'react';

function EmploymentType({employmentType}) {
    return (
        <div className="flex gap-2">
            {employmentType.map((type, index) => (
                <div
                    key={index}
                    className="additional__button w-56 h-12 flex text-sky-800 font-medium border-2 border-indigo-200 justify-center items-center bg-indigo-100 rounded-lg"
                >
                    {type}
                </div>
            ))}
        </div>
    );
}

export default EmploymentType;