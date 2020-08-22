const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return !!matches;
}

export const checkAuth = () => {
    return (dispatch)=>{
        dispatch({
            type: getCookie("cookie_name")?"SET_LOGGED_IN_TRUE":"SET_LOGGED_IN_FALSE",
        })
    }
};