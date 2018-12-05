export const milestone_level_points = [0, 1, 3, 6, 12];

export const titles = [
  {label: 'Dev 1', minPoints: 0, maxPoints: 24},
  {label: 'Dev 2', minPoints: 25, maxPoints: 49},
  {label: 'Dev 3', minPoints: 50, maxPoints: 75},
  {label: 'Dev 4', minPoints: 75}
]

export const pointsToLevels = {
  '0': '1',
  '25': '2',
  '50': '3',
  '75': '4'
}

export const maxLevel = 108

type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

export const tracks: Tracks = require('./asr_tracks.json')

export const track_keys = Object.keys(tracks)

type Tracks = $ObjMap<track_keys, typeof Track>;
