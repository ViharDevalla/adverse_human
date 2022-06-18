import React from 'react'
const LoadingScreen = ({loading}) => {
    return (
            <div className={loading?"z-50 fixed flex justify w-full h-full backdrop-brightness-75 backdrop-filter backdrop-blur-sm align-center rounded-lg":"hidden"}>
              <div className="mx-[88vh] my-[20vh]">
                {/* Use GIF as loader */}
                <svg className="animate-spin h-20 w-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
              </div>
            </div>
    )
}

export default LoadingScreen