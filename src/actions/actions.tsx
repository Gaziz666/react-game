import {
  MUSIC_MUTE,
  SOUND_MUTE,
  SOUND_UNMUTE,
  MUSIC_UNMUTE,
  MUSIC_AUDIO,
  SOUND_VOLUME_CHANGE,
  MUSIC_VOLUME_CHANGE,
} from './action-constant';

const musicAudio = () => ({
  type: MUSIC_AUDIO,
});

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

const musicVolumeChange = (value: number) => ({
  type: MUSIC_VOLUME_CHANGE,
  payload: value,
});

const soundVolumeChange = (value: number) => ({
  type: SOUND_VOLUME_CHANGE,
  payload: value,
});

// eslint-disable-next-line object-curly-newline
export {
  soundMute,
  musicMute,
  musicUnMute,
  soundUnMute,
  musicAudio,
  musicVolumeChange,
  soundVolumeChange,
};

export type MusicAction = { type: string; payload?: number };
