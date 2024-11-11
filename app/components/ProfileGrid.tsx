import React from "react";
import Profile from "./Profile";
import { ParticipantGridProps } from "../types/participant"

const ProfileGrid: React.FC<ParticipantGridProps> = ({ participants }) => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {participants.map((participant) => (
            <Profile key={participant.id} participant={participant} />
         ))}
      </div>
   );
};

export default ProfileGrid;
