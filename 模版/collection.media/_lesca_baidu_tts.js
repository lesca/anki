// Github: https://github.com/lesca/anki/
var corsProxy = "https://cors.silkdiy.cn/baidutts";
var ttsURL = "https://fanyi.baidu.com/gettts"; // cors proxy to this url

    // tts and play
    var tts = (input) => {
        fetch(`${corsProxy}/?lan=zh&text=${encodeURIComponent(input)}&spd=5`, {
            method: 'GET',
            headers: {
            },
        })
            .then(response => response.arrayBuffer())
            .then(data => {
                const blob = new Blob([data], { type: 'audio/mp3' });
                const audio = new Audio(URL.createObjectURL(blob));
                audio.play().catch(error => {
                    console.error('Audio playback error:', error);
                    const errorDiv = document.getElementById('error');
                    errorDiv.textContent = '音频播放失败，请检查浏览器设置或重试。';
                });
            })
            .catch(error => {
                console.error('TTS Error:', error);
                const errorDiv = document.getElementById('error');
                errorDiv.textContent = '语音合成失败，请检查网络连接并刷新页面重试。';
            });
    }