import { GameItem } from '@config/constants';

export const pointCalculator = (group: GameItem[]): number => {
  const points = group.reduce((acc, curr): number => acc + curr.points, 0);
  return points;
};

export const bonusPointCalculator = (group: GameItem[]): number => {
  const groupValue = group[0];
  const { bonusThreshold } = groupValue;
  const { bonusValue } = groupValue;
  const occurences = group.length;
  if (groupValue.hasBonus) {
    return bonusValue * Math.floor(occurences / bonusThreshold);
  }
  return 0;
};
