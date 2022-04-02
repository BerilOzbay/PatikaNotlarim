# Insertion Sort

Insertion Sort Algoritması, düzensiz dizi elemanlarını tek tek ele alarak her birini dizinin sıralanmış kısmındaki uygun yerine yerleştirme esasına dayanır. Algoritma ikinci elemandan itibaren sayıları birer birer karşılaştırır. Karşılaştıran sayıdan küçük sayı buluğunda yer değiştirilerek tüm dizi elemanları için işlem tekrar eder.

[22,27,16,2,18,6] Dizisini adım adım yapacak olursak;

İlk adım olarak dizinin en küçük elemanı aranır. 2 değeri bulunduktan sonra 22 ile yer değiştirir.

1. [2,27,16,22,18,6]

27 ile 16 sayıları kıyaslanır ve yer değiştirilir. Daha sonra 16 ile 2'yi kıyaslar. Sıralama doğru olduğu için bir değişiklik olmaz.

2. [2,16,27,22,18,6]

27 ve 22 sayıları kıyaslanır. Yer değişimi sağlanır. 22 sayısının 16 ve 2 sayılarından büyüklüğü kontrol edilir ve değişiklik yapılmaz.

3. [2,16,22,27,18,6]

27 ve 18 sayıları kıyaslanır. Yer değişimi sağlanır. 18 sayısı daha sonra 22 sayısı ile kıyaslanır ve tekrar yer değişimi olur.

4. [2,16,22,18,27,6]

    4.1. [2,16,18,22,27,6]

6 ve 27 sayısı kıyaslanır. Yer değişimi olur. 6 sayısı 22, 18,16 sayıları ile karşılaştırılarak yer değişimi sağlanır.

5. [2,16,18,22,6,27]

     * 5.1.  [2,16,18,6,22,27]

     * 5.2. [2,16,6,18,22,27]

     * 5.3. [2,6,16,18,22,27]

Sorting Algoritması Sonlanır.

Big O gösterimi ise:
n + (n-1) + (n-2) + ... + 1 = n*(n+1)/2 = (n²+n)/2
* Sonuca göre Big-o -> O(n²)'dir.

Dizi sıralandıktan sonra 18 sayısının bulunması Average Case durumuna girmektedir.

[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımı aşağıdaki gibidir:

1. [2,3,5,8,7,79,4,15,6] -> Dizinin en küçük elemanı 2 bulunur ve 7 ile yer değiştirir.

2. [2,3,5,8,7,79,4,15,6] -> 3 sayısı 5 ile karşılaştırır ve yer değişimi olmaz.

3. [2,3,5,8,7,79,4,15,6] -> 5 ile 8 sayısı karşılaştırılır ve yer değişimi olmaz.

4. [2,3,5,7,8,79,4,15,6] -> 8 ile 7 sayısı karşılaştırılır ve yer değişimi olur.