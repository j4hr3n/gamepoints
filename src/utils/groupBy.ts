interface GroupByParams {
  array: { [key: string]: any }[];
  by: string;
}

export const groupBy = ({ array, by }: GroupByParams): any =>
  array.reduce((acc, curr): any => {
    acc[curr[by]] = (acc[curr[by]] || []).concat(curr);
    return acc;
  }, Object.create(null));
