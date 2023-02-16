const API = `https://rickandmortyapi.com/api/character/`;

const getdata = async (id) => {
    const apiUrl = id ? `${API}${id}`: API;
    try {
        const response = await fetch(apiUrl);
        return await response.json()
    }catch (e) {
        console.error(e)
    }
}

export default getdata;