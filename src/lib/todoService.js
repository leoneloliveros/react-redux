const baseUrl = 'http://localhost:8080/todos'

export const getTodos = () => {
  return fetch(baseUrl).then(res => res.json())
}

export const createTodo = (name) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name,  isCompleted: false })  
  }).then(res => res.json())
}

export const destroyTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

