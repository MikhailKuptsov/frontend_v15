export default function ReplaceNullsWithNoticed(data) {
    // Создаем глубокую копию объекта, чтобы не изменять исходные данные
    const result = JSON.parse(JSON.stringify(data));
    
    // Функция для рекурсивного обхода объекта и замены null
    function replaceNulls(obj) {
        for (const key in obj) {
            if (obj[key] === null) {
                obj[key] = "Без ответа";
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                replaceNulls(obj[key]);
            }
        }
    }
    
    // Применяем функцию только к полю results
    if (result.results) {
        replaceNulls(result.results);
    }
    
    return result;
}