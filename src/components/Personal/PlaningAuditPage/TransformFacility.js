export default function formatPlantsArray(plants) {
  const result = {};
  for (const plant of plants) {
    result[plant.id] = `${plant.short_name}(${plant.full_name})`;
  }
  return result;
}