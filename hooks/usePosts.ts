import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Post } from '../types/post';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const postsQuery = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(postsQuery);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Post[];
    },
  });
};