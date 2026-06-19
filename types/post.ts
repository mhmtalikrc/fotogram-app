import { Timestamp } from 'firebase/firestore';

export type Post = {
  id: string;
  imageUrl: string;
  caption: string;
  userId: string;
  userEmail: string;
  createdAt: Timestamp;
};