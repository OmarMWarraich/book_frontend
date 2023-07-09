// const API_URL = 'https://bookappbackend-production.up.railway.app/get-books'
const API_URL = 'http://localhost:3000/books'

async function getBooks() {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

export default getBooks