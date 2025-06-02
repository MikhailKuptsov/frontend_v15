export default function mapAuditorsToFullNames(auditors, auditors_full_names) {
    const result = {};
    
    // Перебираем все отделы в auditors
    for (const department in auditors) {
        if (auditors.hasOwnProperty(department)) {
            const departmentAudits = auditors[department];
            const departmentFullNames = auditors_full_names[department];
            
            // Перебираем все аудиты в отделе
            for (const audit in departmentAudits) {
                if (departmentAudits.hasOwnProperty(audit)) {
                    const usernames = departmentAudits[audit];
                    const fullNames = departmentFullNames[audit];
                    
                    // Сопоставляем username и ФИО
                    for (let i = 0; i < usernames.length; i++) {
                        const username = usernames[i];
                        const fullName = fullNames[i];
                        result[username] = fullName;
                    }
                }
            }
        }
    }
    
    return result;
}
// // Пример использования
// const auditors = {
//     'Менеджмент': {
//         'M1 Достижение ключевых показателей эффективности завода': ['admin'],
//         'M2 Эталонный поток изготовления продукции': ['admin']
//     }
// };

// const auditors_full_names = {
//     'Менеджмент': {
//         'M1 Достижение ключевых показателей эффективности завода': ['Админов a'],
//         'M2 Эталонный поток изготовления продукции': ['Админов a']
//     }
// };

// console.log(mapAuditorsToFullNames(auditors, auditors_full_names));
// // Вывод: { admin: 'Админов a' }