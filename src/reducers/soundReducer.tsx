import {
  SOUND_MUTE,
  MUSIC_MUTE,
  SOUND_UNMUTE,
  MUSIC_UNMUTE,
  MUSIC_VOLUME_CHANGE,
  SOUND_VOLUME_CHANGE,
} from '../actions/action-constant';
import { MusicAction } from '../actions/actions';

export type SoundType = {
  sounds?: { mute: boolean; volume: number };
  music?: { mute: boolean; volume: number };
};

const initialState: SoundType = {
  sounds: { mute: false, volume: 0.5 },
  music: { mute: true, volume: 0 },
};

const soundReducer = (state: SoundType = initialState, action: MusicAction) => {
  switch (action.type) {
    case SOUND_MUTE:
      return {
        sounds: { ...state.sounds, mute: true },
        music: { ...state.music },
      };
    case SOUND_UNMUTE:
      return {
        sounds: { ...state.sounds, mute: false },
        music: { ...state.music },
      };
    case MUSIC_MUTE:
      return {
        sounds: { ...state.sounds },
        music: { ...state.music, mute: true },
      };
    case MUSIC_UNMUTE:
      return {
        sounds: { ...state.sounds },
        music: { ...state.music, mute: false },
      };
    case MUSIC_VOLUME_CHANGE:
      return {
        sounds: { ...state.sounds },
        music: { ...state.music, volume: action.payload },
      };
    case SOUND_VOLUME_CHANGE:
      return {
        sounds: { ...state.sounds, volume: action.payload },
        music: { ...state.music },
      };
    default:
      return state;
  }
};

export { soundReducer };
