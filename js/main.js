const palyer = document.getElementById('player');
const vm = new Vue({
    el: '#app',
    data: {
        voiceList: MAINFEST,
        currentLanguage: 'ch',
        currentUrl: '',
        isPaused: false
    },
    mounted() {
        player.onerror = () => {
            alert('抱歉，您的浏览器不支持播放');
        },
        player.onended = () => {
            this.currentUrl = '';
            this.isPaused = false;
        }
    },
    methods: {
        play(url) {
            console.log(url);
            this.isPaused = false;
            if (this.currentUrl === url && !player.paused) {
                player.pause();
                this.isPaused = true;
                return;
            }
            if (this.currentUrl === url && player.paused) {
                player.play();
                this.isPaused = false;
                return;
            }
            this.currentUrl = url;
            player.src = './resource/voices/' + url;
            player.play();
        },
        changeLanguage() {
            this.currentLanguage = this.currentLanguage === 'ch' ? 'jp' : 'ch';
        }
    }
});