export function getQuantityLabel(
  length: number,
  singular: string,
  plural: string
) {
  return `${length} ${length > 1 ? plural : singular}`;
}
