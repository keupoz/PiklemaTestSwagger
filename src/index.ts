import type { paths } from './openapi/petstore';
import createClient from 'openapi-fetch';

const client = createClient<paths>({ baseUrl: 'https://petstore3.swagger.io/api/v3' });

console.log('Запрос к серверу ...');

const { response, data } = await client.GET('/pet/findByStatus', {
  params: {
    query: {
      status: 'available',
    },
  },
});

console.log('Ответ получен!\n');

if (data) {
  console.log('Найдены следующие питомцы:');
  console.log(data.map(item => item.name).join(', '));
}
else {
  console.log(`Не удалось получить данные. Статус ответа: ${response.status}`);
}
