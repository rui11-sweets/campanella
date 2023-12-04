const swiper = new Swiper(".swiper", {
    centeredSlides: true, // 1枚目のスライドを中央にする
    loop: true, // ループさせる
    speed: 700, // 少しゆっくり(デフォルトは300)
    slidesPerView: 3, // スライドの表示枚数
    autoplay: { // 自動再生
        delay: 3000, // 3秒後に次のスライド
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// /** 画面内に入ったどうかを監視しておきたい要素をここで取得　*/
// const monitored = document.querySelectorAll('.menuContainer');

// /**監視範囲の細かい設定。詳しい説明は https://ics.media/entry/190902/ がわかりやすいです */
// const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1
// };

// /**IntersectionObserverを起動 */
// const observer = new IntersectionObserver(slideStart);

// // monitoredが画面内に入ったら発動。forEachを使っているので、複数のスライダーがあっても全部monitoredできる
// monitored.forEach(monitor => {
//     observer.observe(monitor);
// });

// /**  要素が表示されたら実行する動作 */
// function slideStart(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             /** swiperのautoplayを開始させる */
//             swiper.autoplay.start();
//         }
//     });
// };

// /** swiper制御のための記述。 */
// const swiper = new Swiper('.swiper', {

//     /**swiperのパラメーター */
//     loop: true,
//     spaceBetween: 10, //スライド感の余白
//     slidesPerView: 3,
//     autoplay: {
//         delay: 2000,
//     },

//     pagination: {
//         el: '.swiper-pagination',
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },


//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },

// });

// /** swiperの自動再生をオフにする記述。画面に表示されていないときはスライドが１枚目から進まなくなる */
// swiper.autoplay.stop();