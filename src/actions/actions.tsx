import {
  MUSIC_MUTE,
  SOUND_MUTE,
  SOUND_UNMUTE,
  MUSIC_UNMUTE,
} from './action-constant';

const soundMute = () => ({
  type: SOUND_MUTE,
});

const soundUnMute = () => ({
  type: SOUND_UNMUTE,
});

const musicMute = () => ({
  type: MUSIC_MUTE,
});

const musicUnMute = () => ({
  type: MUSIC_UNMUTE,
});

// eslint-disable-next-line object-curly-newline
export { soundMute, musicMute, musicUnMute, soundUnMute };

export type MusicAction = { type: string; payload?: string };
