# Api_Server_TypeScript
Запуск сервера<br />
1) В случае если на устройстве есть установленный Doker<br />
```
 docker run exsploer/api-server-main:1.0.0
 https://hub.docker.com/repository/docker/exsploer/api-server-main - ссылка на образ
```
2) Если на компьютере не установлен докер, то скачайте этот репозиторий и запустить сервер командой в терминале

```
 git clone https://github.com/Progerrs/Api_Server_TS.git
 npm run start:dev
```
Что бы перейти на страницу докумантаций нужно прописать в адрестной строке такой путь: 
```
 http://localhost:7000/api/docs#/
```
У вас должна отобразиться страница документаци
![Alt text](/MainPage.png?raw=true "Main page")
____
После запуска необходимо запустить frontend(Angular) <br/>
 ```
Сылка на frontend: https://github.com/Progerrs/Frontend
```
После установки фронтенда и запуска Api сервера необходимо запустить Agnlur <br />
Для этого введите такую команду в консоль
```
npm run start
```
После успешного запуска перейдите на такой URL в вашем браузере
```
http://localhost:4200/
```
Если у вас перед глазами появилась  такая страница, то поздравляю вас! <br />
![Alt text](/MainPage.png?raw=true "Main page")
