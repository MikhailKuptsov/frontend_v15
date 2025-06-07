// функция проверки регистрирован ли пользователь проверка наличия сессионного ключа (получаем информацию о пользователе)
export const getAuthData = () => {
    try {
      const userData = sessionStorage.getItem('user_data');
      if (!userData) return null;
      
      const parsedData = JSON.parse(userData);
      if (!parsedData?.api_session_key) return null;
      
      return parsedData;
    } catch (e) {
      console.error('Error parsing user data:', e);
      return null;
    }
  };
  
  //Проверка аутентификации
  export const isAuthenticated = () => {
    return !!getAuthData();
  };
  
  //Проверка роли админа при доступе к странице
  export const checkAdmin = () => {
    const userData = getAuthData();
    // return userData?.role === 'Admin';
    if (userData.role === 'Admin'){
      return(true)
    }else{
      alert("вы не имеете доступ к странице админа")
      return(false)
    }
  };
  export const checkModerator =()=>{
    const userData = getAuthData();
    if (userData.role==='Admin' || userData.role==='Moderator'){
      return(true)
    }else{
      alert("вы не администратор и не модератор")
      return(false)
    }

  }