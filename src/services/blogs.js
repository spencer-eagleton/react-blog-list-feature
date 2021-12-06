import { checkError, client } from './client';

export async function getBlogs() {
  const response = await client.from('restaurants').select();
  return checkError(response);
}
