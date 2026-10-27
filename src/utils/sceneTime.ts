export type ScenePeriod = 'dawn' | 'day' | 'sunset' | 'night';

export interface SceneDefinition {
  period: ScenePeriod;
  label: string;
  src: string;
}

export const scenes: Record<ScenePeriod, SceneDefinition> = {
  dawn: { period: 'dawn', label: 'Dawn waters', src: '/images/Lakeside_Dawn_with_Cat_and_Lantern.png' },
  day: { period: 'day', label: 'Bright day', src: '/images/Lakeside_Day_with_Cat_and_Lantern.png' },
  sunset: { period: 'sunset', label: 'Sunset waters', src: '/images/Lakeside_Sunset_with_Cat_and_Lantern.png' },
  night: { period: 'night', label: 'Night waters', src: '/images/Lakeside_Night_with_Cat_and_Lantern.png' },
};

export function getScenePeriod(hour: number): ScenePeriod {
  if (hour >= 5 && hour < 8) return 'dawn';
  if (hour >= 8 && hour < 17) return 'day';
  if (hour >= 17 && hour < 19) return 'sunset';
  return 'night';
}

export function getSceneForDate(date: Date): SceneDefinition {
  return scenes[getScenePeriod(date.getHours())];
}
