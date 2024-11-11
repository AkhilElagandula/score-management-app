// types.ts
export interface Participant {
    id: number;
    name: string;
    code?: string;
    photo: string;
    backgroundImage: string;
    description: string;
    score: number;
    rank: number;
 }
 
 // Props for the CandidateCard component
 export interface ParticipantCardProps {
    participant: Participant;
 }
 
 // Props for the CandidateGrid component
 export interface ParticipantGridProps {
    participants: Participant[];
 }
 