import { FlatList, View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../types/post';

export default function Feed() {
  const { data: posts, isLoading, isError, refetch, isRefetching } = usePosts();

  if (isLoading) {
    return <View className="flex-1 items-center justify-center"><ActivityIndicator size="large" /></View>;
  }
  if (isError) {
    return <View className="flex-1 items-center justify-center px-6"><Text className="text-red-500">Gönderiler yüklenemedi.</Text></View>;
  }

  const renderItem = ({ item }: { item: Post }) => (
    <View className="mb-6 bg-white border-b border-gray-100 pb-4">
      <Text className="px-4 py-2 font-semibold">{item.userEmail}</Text>
      <Image source={{ uri: item.imageUrl }} className="w-full h-96" resizeMode="cover" />
      <Text className="px-4 pt-2">{item.caption}</Text>
      <Text className="px-4 pt-1 text-xs text-gray-400">
        {item.createdAt?.toDate().toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isRefetching}
        ListEmptyComponent={<View className="items-center mt-20"><Text className="text-gray-400">Henüz gönderi yok.</Text></View>}
      />
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-blue-500 w-14 h-14 rounded-full items-center justify-center"
        onPress={() => router.push('/(tabs)/add')}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}