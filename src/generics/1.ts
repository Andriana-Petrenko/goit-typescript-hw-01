import axios from 'axios';

interface UserData {
  id: number;
  name: string;
  email: string;
}

async function fetchData<UserData> (url: string):Promise<UserData> {
try {
const response = await axios.get<UserData>(url);
return response.data;
} catch (error) {
throw new Error(`Error fetching from ${url}: ${error}`);
}
}


