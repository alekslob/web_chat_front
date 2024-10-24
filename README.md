# Интерфейс веб-чата
Это интерфейс веб-чата для [сервера](https://github.com/alekslob/web_chat_serv)

##  Запуск проекта

1. Для работы необходима версия `node.js v20.18`
2. Установите зависимости
   ```
   npm install
   ```
4. Настройте прокси
   - Откройте файл `vue.config.js`
   - В параметре proxy установите url-адрес вашего [сервера чата](https://github.com/alekslob/web_chat_serv)
     
     ```
     module.exports = defineConfig({
        transpileDependencies: true,
        devServer: {
            proxy: "http://localhost:8000/",
        },
      })
     ```
6. Запустите сервер
   ```
   npm run serve
   ```
8. Откройте [http://localhost:8080](http://localhost:8080) в браузере.

## Сборка проекта
Скомпилировать код можно с помощью `npm run build`. Сборка прокта появится в папке `dist`.
