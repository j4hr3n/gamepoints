import { GameItem } from '@config/constants';
import { pointCalculator, bonusPointCalculator } from '@utils/pointCalculator';
import { groupBy } from '@utils/groupBy';

export interface Item extends GameItem {
  qty: number;
  bonusPoints: number;
}
interface GroupedItems {
  [key: string]: Item[];
}

export interface GameState {
  groupedItems: Item[];
  allItems: GameItem[];
}

export const gameInitialState: GameState = { groupedItems: [], allItems: [] };

export enum GameActionTypes {
  ADD_ITEM = '[POINTS] ADD ITEM',
  RESET = '[POINTS] RESET'
}

export interface GameAction {
  type: GameActionTypes;
  points?: number;
  item?: GameItem;
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case GameActionTypes.ADD_ITEM: {
      const allItems = [...state.allItems, action.item];
      const groupedByLabel: GroupedItems = groupBy({
        array: allItems,
        by: 'label'
      });
      const groupedItems: Item[] = Object.keys(groupedByLabel).map(
        (key): Item => {
          const items = groupedByLabel[key].reduce(
            (acc): Item => {
              const bonusPoints = bonusPointCalculator(groupedByLabel[key]);
              const normalPoints = pointCalculator(groupedByLabel[key]);
              return {
                ...acc,
                points: normalPoints,
                bonusPoints,
                qty: groupedByLabel[key].length
              };
            }
          );

          return items;
        }
      );
      return { ...state, allItems, groupedItems };
    }
    case GameActionTypes.RESET:
      return gameInitialState;
    default:
      return state;
  }
}
