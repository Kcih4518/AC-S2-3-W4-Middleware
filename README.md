# Middleware : requestDuration

使用 Node.js + Express 建立的 middleware，用來記錄伺服器的請求紀錄與伺服器回應的時間。

```shell=bash
YYYY-MM-DD HH:mm:ss | request_method from request_url | total time: duration_time

2021-07-27 12:48:46 | POST from / | total time: 1ms
```

## Getting Started

本專案已經設定 npm script, 因此可以直接透過 npm install 與 npm run 的方式來執行。

### Development environment

| Package            | Version  |
| ------------------ | -------- |
| mac Big Sur        | 11.4     |
| VS code            | 1.57.1   |
| Node.js            | v14.17.1 |
| Npm                | 7.19.0   |
| Nvm                | 0.34.0   |
| Nodemon            | 2.0.7    |
| Express            | 4.17.1   |
| Express-handlebars | 5.3.2    |
| method-override    | 3.0.0    |
| standard           | 16.0.3   |
| moment             | 2.29.1   |

### Description

伺服器會將請求進行記錄並計算回應時，log 格式與顯示如下:

```bash
YYYY-MM-DD HH:mm:ss | request_method from request_url | total time: duration_time

2021-07-27 12:48:46 | POST from / | total time: 1ms
```

### Route Table

| Verb | URL                       |
| ---- | ------------------------- |
| GET  | http://localhost:3000/    |
| GET  | http://localhost:3000/new |
| GET  | http://localhost:3000/:id |
| POST | http://localhost:3000/    |

### Installing

1. 透過 https 取得此專案

```bash
$ git clone https://github.com/Kcih4518/AC-S2-3-W4-Middleware.git
```

2. 安裝 node module

```bash
$ cd AC-S2-3-W4-Middleware
$ npm install
```

3. 透過 npm 在 local 啟動 web server

```bash
$ npm run dev
Express is running on http://localhost:3000
```

4. 透過 curl 進行 Request :

```bash
# 列出全部 Todo
$ curl http://localhost:3000/


# 新增 Todo 頁面
$ curl http://localhost:3000/new

# 顯示一筆 Todo
$ curl http://localhost:3000/54564564564

# 新增一筆 Todo
$ curl -X POST http://localhost:3000/
```

5. 查看 logs/request.log

```bash
$ cat logs/request.txt

2021-07-27 12:48:36 | GET from / | total time: 4ms
2021-07-27 12:48:39 | GET from /new | total time: 0ms
2021-07-27 12:48:42 | GET from /12345 | total time: 0ms
2021-07-27 12:48:46 | POST from / | total time: 1ms
```
