// Github: https://github.com/lesca/anki/
// edge tts
var ttsURL = "https://cors.silkdiy.cn/edgetts/v1/audio/speech";
// tts and play
var tts = (input, voice = "zh-CN-XiaoxiaoNeural", speed = 1.0) => {
    fetch(ttsURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: input,
            voice: voice,
            response_format: "mp3",
            speed: speed
        })
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