export default function ProcessData(data) {
    const result = {};
    
    for (const category in data) {
        if (data.hasOwnProperty(category)) {
            const modules = Object.keys(data[category]);
            result[category] = modules;
        }
    }
    
    return result;
}