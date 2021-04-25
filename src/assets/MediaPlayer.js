
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        media: this.media,
        play: () => { this.media.play() },
        pause: () => { this.media.pause() },
        set muted(value) {
            this.media.muted = value;
        }
    };

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
};

MediaPlayer.prototype.toggleMute = function() {
    this.media.muted = !this.media.muted;
};

export default MediaPlayer;