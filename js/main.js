const vm = new Vue({
    el: '#app',
    data: {
        voiceList: mainfest.kohiList,
        currentLanguage: 'ch'
    },
    methods: {
        play(url) {
            const ad = document.getElementById('player');
            ad.src = './resource/voices/' + url;
            ad.onerror = function () {
                alert('音频播放失败..')
            }
            ad.play();
        },
        changeLanguage() {
            if (this.currentLanguage === 'ch') {
                this.currentLanguage = 'jp';
            } else {
                this.currentLanguage = 'ch';
            }
        }
    },
});