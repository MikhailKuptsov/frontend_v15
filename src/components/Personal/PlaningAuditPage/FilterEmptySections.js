export default function FilterEmptySections(data) {
  const result = {};

  for (const [sectionName, subsections] of Object.entries(data)) {
    const filteredSubsections = {};

    for (const [subsectionName, values] of Object.entries(subsections)) {
      if (values.length > 0) {
        filteredSubsections[subsectionName] = values;
      }
    }

    if (Object.keys(filteredSubsections).length > 0) {
      result[sectionName] = filteredSubsections;
    }
  }

  return result;
}