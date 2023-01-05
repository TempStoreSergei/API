# Api_Server_TypeScript
Запуск сервера<br />
1) В случае если на устройстве есть установленный Doker<br />
```
 docker run exsploer/api-server-main:1.0.0
 https://hub.docker.com/repository/docker/exsploer/api-server-main - ссылка на образ
```
2) Если на компьютере не скачан докер, то скачать этот репозиторий и запустить сервер командой в терминале
Ссылка на документация к API: https://app.swaggerhub.com/apis/SZABLIKOV853/Test/1.0.0#/
```
 git clone https://github.com/Progerrs/Api_Server_TS.git
 npm run start:dev
```
____
После запуска необходимо запустить frontend(Angular) <br />
```
Сылка на frontend: https://github.com/Progerrs/fron
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
