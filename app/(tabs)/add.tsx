import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useAddPost } from '../../hooks/useAddPost';

export default function AddPost() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const { mutate, isPending } = useAddPost();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.7,
    });
    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const handleShare = () => {
    if (!imageUri) {
      Alert.alert('Hata', 'Lütfen bir resim seçin.');
      return;
    }
    mutate(
      { imageUri, caption },
      {
        onSuccess: () => {
          setImageUri(null);
          setCaption('');
          router.back();
        },
        onError: (error: any) => Alert.alert('Hata', error.message),
      }
    );
  };

  return (
    <View className="flex-1 bg-white px-6 pt-6">
      <Text className="text-2xl font-bold mb-6">Yeni Gönderi</Text>

      <TouchableOpacity
        className="border border-gray-300 rounded-lg h-64 items-center justify-center mb-4 overflow-hidden"
        onPress={pickImage}
      >
        {imageUri ? (
          <Image source={{ uri: imageUri }} className="w-full h-full" resizeMode="cover" />
        ) : (
          <Text className="text-gray-400">Resim Seç</Text>
        )}
      </TouchableOpacity>

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-6"
        placeholder="Açıklama yazın..."
        value={caption}
        onChangeText={setCaption}
        multiline
      />

      <TouchableOpacity className="bg-blue-500 rounded-lg py-3 items-center" onPress={handleShare} disabled={isPending}>
        {isPending ? <ActivityIndicator color="#fff" /> : <Text className="text-white font-semibold">Paylaş</Text>}
      </TouchableOpacity>
    </View>
  );
}