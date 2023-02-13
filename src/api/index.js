export const getUser = async (userId) => {
  const response = (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()

  return response;
}