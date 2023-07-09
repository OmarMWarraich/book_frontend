const API_URL = 'https://bookappbackend-production.up.railway.app/get-books'

async function getBooks() {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data.data
}

export default getBooks