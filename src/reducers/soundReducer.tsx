import {
  SOUND_MUTE,
  MUSIC_MUTE,
  SOUND_UNMUTE,
  MUSIC_UNMUTE,
} from '../actions/action-constant';
import { MusicAction } from '../actions/actions';

const initialState = {
  sound: { mute: false as boolean },
  music: { mute: false as boolean },
};

const soundReducer = (state: SoundType = initialState, action: MusicAction) => {
  switch (action.type) {
    case SOUND_MUTE:
      return {
        sound: { ...state.sound, mute: true },
        music: { ...state.music },
      };
    case SOUND_UNMUTE:
      return {
        sound: { ...state.sound, mute: false },
        music: { ...state.music },
      };
    case MUSIC_MUTE:
      return {
        sound: { ...state.sound },
        music: { ...state.music, mute: true },
      };
    case MUSIC_UNMUTE:
      return {
        sound: { ...state.sound },
        music: { ...state.music, mute: false },
      };
    default:
      return state;
  }
};

export { soundReducer };

export type SoundType = typeof initialState;
