📸 Fotogram

Mini Instagram tarzı bir foto paylaşım uygulaması. Firebase Auth, Firebase Storage ve Firestore kullanılarak geliştirildi.

✨ Özellikler


Email/şifre ile kayıt, giriş, çıkış (oturum hatırlama)
Galeriden resim seçip Firebase Storage'a yükleme
Gönderi metadata'sının Firestore'da tutulması (resim URL'i, açıklama, sahip bilgisi)
Tüm gönderilerin akışta (feed) listelenmesi
Profil sayfasında kullanıcının kendi gönderileri


🛠 Kullanılan Teknolojiler


Expo + Expo Router
Firebase (Auth, Firestore, Storage)
React Query (@tanstack/react-query)
NativeWind (Tailwind CSS for React Native)
TypeScript


🚀 Kurulum

bun install

firebaseConfig.ts dosyasını oluşturup kendi Firebase config bilgilerinizi ekleyin:

tsconst firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};

Uygulamayı çalıştırın:

bun run web

📸 Ekran Görüntüleri

<img width="828" height="1792" alt="WhatsApp Image 2026-06-19 at 22 51 05" src="https://github.com/user-attachments/assets/9a579395-93d6-4706-9543-937d9cc0d0cd" />
<img width="504" height="890" alt="Ekran görüntüsü 2026-06-19 224953" src="https://github.com/user-attachments/assets/457b61c6-5fa9-431d-b9e5-580ba9135504" />
<img width="828" height="1792" alt="WhatsApp Image 2026-06-19 at 22 51 06" src="https://github.com/user-attachments/assets/cee6b0d7-079d-43e0-8417-07a3605d84d2" />
<img width="773" height="911" alt="Ekran görüntüsü 2026-06-19 223715" src="https://github.com/user-attachments/assets/a96e2be4-73d7-4b7c-a83b-06d9b216bc24" />
<img width="828" height="1792" alt="WhatsApp Image 2026-06-19 at 22 51 05 (1)" src="https://github.com/user-attachments/assets/198d3d56-9608-4fd4-86f8-7c31c452f298" />
<img width="774" height="913" alt="Ekran görüntüsü 2026-06-19 223914" src="https://github.com/user-attachments/assets/920922fd-bc4e-44b8-9168-7d2e58fdf8bb" />
