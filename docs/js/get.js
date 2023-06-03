import axios from 'axios';
const options1 = {
  method: 'GET',
  url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
  params: {
    'nutrition-type': 'cooking',
    'category[2]': 'foods',
    'health[0]': 'alcohol-free',
  },
  headers: {
    'X-RapidAPI-Key': '5620ea601dmsh1b209d6a251afffp1e6c3fjsn0f7452695415',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
  },
};

const options2 = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/list',
  params: {
    limit: '24',
    start: '0',
  },
  headers: {
    'X-RapidAPI-Key': '5620ea601dmsh1b209d6a251afffp1e6c3fjsn0f7452695415',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
  },
};

async function getResponse(options) {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { options1, options2, getResponse };
