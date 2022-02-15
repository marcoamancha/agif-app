import React from 'react'

export const ListImages = ({info}) => {
    const {url, title, city} = info;
  return (
    <>        
        <div className="max-w-sm border-2 border-gray-700 rounded overflow-hidden shadow-lg mx-4 my-2">
              <img className="object-cover h-48 w-96" src={url} alt="Sunset in the mountains" />
                 <div className="px-6 py-4">
                   <div className="font-bold text-xl text-white mb-2 uppercase"> {city} </div>
                       <p className="text-white text-base">
                          {title}
                           </p>
                            </div>
                      {/* <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
      </div>
    </>
  )
}
