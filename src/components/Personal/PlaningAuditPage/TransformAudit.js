export default function TransformAuditData(inputData) {
  const result = {
    auditors: {}
  };

  // Проходим по всем категориям (например, "Менеджмент", "Менеджмент 2")
  for (const category in inputData) {
    if (inputData.hasOwnProperty(category)) {
      result.auditors[category] = {};
      
      // Проходим по всем модулям в категории (например, "M1 Достижение...", "M2 Эталонный поток...")
      for (const module in inputData[category]) {
        if (inputData[category].hasOwnProperty(module)) {
          // Инициализируем пустой массив для каждого модуля
          result.auditors[category][module] = [];
        }
      }
    }
  }

  return result;
}