import Component from '../component';
import RPlayer from '../rplayer';
import { clamp, formatTime } from '../utils';
import ProgressBar from './progress-bar';

class Thumbnail extends Component {
  private readonly progressBar: ProgressBar;
  private readonly time: HTMLElement;

  constructor(player: RPlayer, progressBar: ProgressBar) {
    super(player);

    this.addClass('rplayer_thumbnail');

    this.progressBar = progressBar;
    this.time = document.createElement('div');
    this.time.classList.add('rplayer_thumbnail_time');

    this.appendChild(this.time);
  }

  update(x: number, seconds: number): void {
    this.time.innerText = formatTime(seconds);
    const half = this.rect.width / 2;

    this.addStyle({
      left: `${clamp(x, half, this.progressBar.rect.width - half)}px`,
    });
  }
}

export default Thumbnail;
