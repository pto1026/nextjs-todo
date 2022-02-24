export async function getAllTodos() {
    const response = await fetch('http://localhost:8080/todos')
    const data = await response.json()
    return data
}