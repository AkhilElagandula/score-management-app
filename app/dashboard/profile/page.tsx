// app/dashboard/profile/page.tsx

import React from 'react';
import ProfileGrid from '@/app/components/ProfileGrid';
import { Participant } from '@/app/types/participant';

const paticipants: Participant[] = [
    {
       id: 1,
       name: "Jane Doe",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg.jpg",
       description: "Software Engineer",
       score: 85,
       rank: 3,
    },
    {
       id: 2,
       name: "John Smith",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg2.jpg",
       description: "Sales Excecutive",
       score: 92,
       rank: 1,
    },
    {
       id: 3,
       name: "Emily Davis",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg3.jpg",
       description: "Product Manager",
       score: 88,
       rank: 2,
    },
    {
       id: 4,
       name: "Michael Clark",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg4.jpg",
       description: "An award-winning designer known for sustainable fashion.",
       score: 75,
       rank: 5,
    },
    {
       id: 5,
       name: "Sophia Johnson",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg5.jpg",
       description: "A renowned designer from London, focusing on avant-garde styles.",
       score: 78,
       rank: 4,
    },
    {
       id: 6,
       name: "Liam Brown",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg6.jpg",
       description: "A young, edgy designer from Los Angeles, known for his bold and unconventional designs.",
       score: 70,
       rank: 6,
    },
    {
       id: 7,
       name: "Olivia Wilson",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg7.jpg",
       description: "A globally recognized designer from Tokyo, blending traditional and modern aesthetics.",
       score: 93,
       rank: 1,
    },
    {
       id: 8,
       name: "Ethan Lee",
       photo: "/images/profile.jpg",
       backgroundImage: "/images/fashion-bg8.jpg",
       description: "A popular designer from Seoul, mixing tech and fashion in exciting ways.",
       score: 80,
       rank: 4,
    },
 ];
 

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 items-center justify-center">
      <ProfileGrid participants={paticipants} />
    </div>
  );
};

export default ProfilePage;
