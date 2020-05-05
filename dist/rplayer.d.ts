import Component from './component';
import Controls from './controls';
import Events from './events';
import Fullscreen from './fullscreen';
import { RPlayerOptions } from './options';
declare class RPlayer extends Component {
    static readonly Events: typeof Events;
    el: HTMLElement;
    readonly media: HTMLVideoElement;
    readonly fullscreen: Fullscreen;
    readonly controls: Controls;
    readonly options: RPlayerOptions;
    private resizePending;
    private prevVolume;
    private readonly fullscreenClass;
    private readonly pausedClass;
    constructor(opts: RPlayerOptions);
    private initFullscreen;
    private initClassName;
    private initInteraction;
    private resizeHandler;
    get currentTime(): number;
    get duration(): number;
    get buffered(): TimeRanges;
    get paused(): boolean;
    setMediaAttrs(map: RPlayerOptions['video']): void;
    mount(el?: HTMLElement): void;
    seek(seconds: number): void;
    play(): void;
    pause(): void;
    toggle(): void;
    volume(v?: number): number;
    muted(v?: boolean): boolean;
    toggleVolume(): void;
    playbackRate(rate: number): number;
}
export default RPlayer;
