import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebaseConfig';
import { Post } from '../../types/post';

export default function Profile() {
  const { user, logout } = useAuth();

  const { data: myPosts } = useQuery({
    queryKey: ['myPosts', user?.uid],
    queryFn: async (): Promise<Post[]> => {
      const q = query(collection(db, 'posts'), where('userId', '==', user!.uid), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Post[];
    },
    enabled: !!user,
  });

  return (
    <View className="flex-1 bg-white px-6 pt-6">
      <Text className="text-xl font-semibold mb-2">{user?.email}</Text>
      <Text className="text-gray-400 mb-6">{myPosts?.length ?? 0} gönderi</Text>

      <TouchableOpacity className="bg-red-500 rounded-lg py-3 items-center mb-6" onPress={logout}>
        <Text className="text-white font-semibold">Çıkış Yap</Text>
      </TouchableOpacity>

      <FlatList
        data={myPosts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <Image source={{ uri: item.imageUrl }} className="w-1/3 aspect-square" resizeMode="cover" />}
      />
    </View>
  );
}