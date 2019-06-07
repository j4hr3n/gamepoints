export interface GameItem {
  label: string;
  points: number;
  hasBonus: boolean;
  bonusThreshold?: number;
  bonusValue?: number;
}

export const items: GameItem[] = [
  {
 label: 'A', points: 50, hasBonus: true, bonusThreshold: 3, bonusValue: 50,
},
  {
 label: 'B', points: 30, hasBonus: true, bonusThreshold: 2, bonusValue: 30,
},
  { label: 'C', points: 20, hasBonus: false },
  { label: 'D', points: 15, hasBonus: false },
];
