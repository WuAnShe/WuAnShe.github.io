const vm = new Vue({
    el: '#app',
    data: {
        voiceList: mainfest.kohiList,
        currentLanguage: 'ch',
        currentUrl:'',
        itemStyle:'stop'
    },
    mounted() {
        this.$refs['player'].onerror = function (e) {
            alert('抱歉，您的浏览器不支持播放');
        },
        this.$refs['player'].onended = ()=>{
            this.currentUrl = '';
        }
    },
    methods: {
        play(url) {
            if(this.currentUrl === url && !this.$refs['player'].paused){
                this.$refs['player'].pause();
                this.currentUrl = '';
                return;
            }
            this.$refs['player'].src = './resource/voices/' + url;
            this.itemStyle = 'playing';
            this.currentUrl = url;
            this.$refs['player'].play();
        },
        changeLanguage() {
            this.currentLanguage = this.currentLanguage === 'ch' ? 'jp' : 'ch';
        }
    }
});