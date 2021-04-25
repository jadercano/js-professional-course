function AutoPause() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
}

AutoPause.prototype.run = function(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: this.threshold
    });
    observer.observe(player.media);
};

AutoPause.prototype.handleIntersection = function(entries) {
    const entry = entries[0];

    (entry.intersectionRatio >= this.threshold) ? this.player.play() : this.player.pause()
};

export default AutoPause;