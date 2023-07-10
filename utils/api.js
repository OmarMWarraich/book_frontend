// const API_URL = 'https://bookappbackend-production.up.railway.app/get-books'
const API_URL = 'https://afternoon-castle-25737-b28e8fca3464.herokuapp.com/books'

async function getBooks() {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

export default getBooks