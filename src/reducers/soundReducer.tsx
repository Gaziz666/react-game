import {
  SOUND_MUTE,
  MUSIC_MUTE,
  SOUND_UNMUTE,
  MUSIC_UNMUTE,
} from '../actions/action-constant';
import { MusicAction } from '../actions/actions';

export type SoundType = {
  sounds?: { mute: boolean };
  music?: { mute: boolean };
  musicAudio?: HTMLAudioElement;
};

const initialState = {
  sounds: { mute: false as boolean },
  music: { mute: true as boolean },
  musicAudio: new Audio('../assets/audio/music.mp3'),
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
    default:
      return state;
  }
};

export { soundReducer };
