import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from '../firebaseConfig';

type AddPostParams = { imageUri: string; caption: string };

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ imageUri, caption }: AddPostParams) => {
      const user = auth.currentUser;
      if (!user) throw new Error('Giriş yapılmamış.');

      const response = await fetch(imageUri);
      const blob = await response.blob();

      const storageRef = ref(storage, `posts/${user.uid}/${Date.now()}.jpg`);
      await uploadBytes(storageRef, blob);

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'posts'), {
        imageUrl,
        caption,
        userId: user.uid,
        userEmail: user.email,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};