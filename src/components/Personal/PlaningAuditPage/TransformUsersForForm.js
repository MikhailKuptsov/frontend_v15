function TransformUsersForForm(users) {
    const result = {};
    
    for (const user of users) {
        // Собираем ФИО, пропуская null значения
        const fullNameParts = [
            user.surname,
            user.name,
            user.patronymic
        ].filter(part => part !== null);
        
        // Объединяем части в одну строку
        const fullName = fullNameParts.join(' ');
        
        // Добавляем в результирующий объект
        result[user.username] = fullName;
    }
    
    return result;
}

export default TransformUsersForForm