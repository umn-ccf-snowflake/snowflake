// @flow
import * as d3 from 'd3'
import * as config from './components/Config'

export type TrackId = $Keys<typeof config.tracks>;

export type Milestone = $Keys<config.milestone_level_points>

export type MilestoneMap = $ObjMap<config.track_keys, typeof Milestone>;

export const milestones = Object.keys(config.milestone_level_points).map((value) => Number.parseInt(value,10))

export const milestoneToPoints = (milestone: Milestone): number => {
  return config.milestone_level_points[milestone]
}

export const trackIds: config.my_new_type[] = Object.keys(config.tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(config.tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = config.tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])


export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return config.titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
