# Merge Sort
Merge Sort Algoritması diziyi ardışık olarak ikiye ayırarak ilerler. Son eleman kalıncaya kadar bu işlem devam eder. Tek elemanlara ulaşan algoritma, tek tek büyüklük kıyaslaması yapar ve sıralı olarak diziyi birleştirir. Problem daha küçük parçalara böl ve yönet mantığına dayanır. Parçalalara bölünmesi zaman karmaşıklığını **logaritmik zamana** indirger.

### Örnek

[16,21,11,8,12,22] dizisini merge sort algoritmasına göre sıralayın ve adımları gösterin.

* Adım 1) 16-21-11 ve 8-12-22 şeklinde dizi iki parçaya ayrılır.

* Adım 2) 16-21 ve 11 && 8-12 ve 22 şeklinde ayrılmaya devam eder. (***Toplam elemanı tek sayı olan dizilerde tek kalan elemanın sağa veya sola yerleştirilmesi farketmez***.)

* Adım 3) 16 / 21 / 11 / 8 / 12 / 22 şeklinde dizinin ayırma işlemi sonlanır.

* Adım 4) Birleştirme aşamsına geçen algoritma 16 ve 21 i karşılaştırıp 16-21 şeklinde ilk küçük dizisini elde eder. 11 ve 8'i karşılaştırıp 8-11,  12 ve 22'yi karşılaştırıp 12-22 dizileri elde edilir. (***Elemizde sıralı 3 dizi oluştu***)

 * Adım 5) 16-21 ve 8-11 dizilerini kıyaslayan algoritma iki dizideki en küçük elemanı bildiği için direkt 8 ve 16'yı kıyaslayarak başlar. 8 in küçük olduğunu bulunca 8 i başa alır. Daha sonra 16 ve 11 i karşılaştırarak 11 i 2. eleman yapar. 16-21 ikilisi sıralı olduğu için 8-11-16-21 dizisi elde edilir.

 * Adım 6) 8-11-16-21 dizisi ve 12-22 dizisinin ilk elemanları karşılaştırılır. 8 12 den küçük olduğu için değişim olmaz. 11 12 den küçük olduğu için sabit kalmaya devam eder. 16 12 kıyaslamasın da 3. sıraya 12 yazılır. 16 22 kıyaslamasın da değişim olmaz. 21 ve 22 arasında kıyaslama yapar ve 8-11-12-16-21-22 sıralı dizisi elde edilir.

  Zaman Karmaşıklığı = O(nlogn)


