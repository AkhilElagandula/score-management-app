// app/components/ProfileGrid.tsx

import React from 'react';
import { ParticipantCardProps } from '../types/participant';
import Image from 'next/image';


const Profile: React.FC<ParticipantCardProps> = ({ participant }) => {
    return (
        <div className="w-full h-full lg:w-full lg:flex rounded-lg shadow-lg">
           {/* <div
              className="h-48 lg:h-auto lg:w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                 backgroundImage: `url(${participant.backgroundImage})`
              }}
              title="Candidate background"
           ></div> */}
           <div className="w-full border-r border-b border-l border-t bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                 <Image
                    className="rounded-full mx-auto mb-4"
                    width={60}
                    height={60}
                    src={participant.photo}
                    alt={participant.name}
                 />
                 <div className="text-gray-900 font-bold text-xl mb-2 text-center">
                    {participant.name}
                 </div>
                 <p className="text-gray-700 text-base">{participant.description}</p>
              </div>
              <div className="flex items-center justify-between">
                 <div className="text-lg font-bold text-indigo-500">
                    Score: {participant.score}
                 </div>
                 <div className="text-sm font-semibold bg-green-100 text-green-800 py-1 px-3 rounded-full">
                    Rank: #{participant.rank}
                 </div>
              </div>
           </div>
        </div>
     );
};

export default Profile;
