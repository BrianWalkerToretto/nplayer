import { Player } from '../../../player';
import { Component } from '../../../utils';
import { Tooltip } from '../../../components/tooltip';
import { ControlItem } from '..';
declare class Volume extends Component implements ControlItem {
    readonly id = "volume";
    private player;
    private volumeIcon;
    private mutedIcon;
    private bar;
    private rect;
    tooltip: Tooltip;
    init(player: Player, tooltip: Tooltip): void;
    private onDragStart;
    private onDragging;
    private onVolumeChange;
    mute(): void;
    unmute(): void;
}
export declare const volumeControlItem: () => Volume;
export {};
