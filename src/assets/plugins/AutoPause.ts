import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run = function(player: MediaPlayer) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(player.media);
    
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    
    private handleIntersection = function(entries: Array<IntersectionObserverEntry>) {
        const entry = entries[0];
    
        (entry.intersectionRatio >= this.threshold) 
            ? this.player.play() 
            : this.player.pause();
    }
    
    private handleVisibilityChange = function() {
        (document.visibilityState === "visible")
            ? this.player.play() 
            : this.player.pause();
    }
}

export default AutoPause;