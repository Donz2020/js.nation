var Config = new function() {
    // analyzer config
    this.temporalSmoothing = 0.3;
    this.minDecibels = -100;
    this.maxDecibels = -33;
    this.fftSize = 16384;
    
    // emblem config
    this.baseEmblemSizeRatio = 3;
}
