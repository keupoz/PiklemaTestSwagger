# Тестовое задание для Пиклема №2

Выполнить любой GET-запрос с сайта https://editor.swagger.io/ (например, https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available) и вывести полученные данные в консоль.

Как выполнять? В отдельном JS файле. Будет плюсом использование TS с типизацией возвращаемых данных.

## Решение

Основное решение находится в файле [src/index.ts](src/index.ts).

Для типизации запросов и ответов используется генератор [openapi-typescript](https://openapi-ts.dev/introduction). Для выполнения запроса используется [openapi-fetch](https://openapi-ts.dev/openapi-fetch/).

Для сборки используется [tsup](https://github.com/egoist/tsup).

## Запуск

Для запуска достаточно установить зависимости с помощью `pnpm i` и выполнить команду `pnpm start`.

### Все доступные скрипты

- `generate:openapi` - гененирует файл с типами на основе файла OpenAPI
- `build` - запускает первый скрипт и транспилирует исходный код
- `start` - собирает проект и запускает его
