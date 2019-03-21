
# Chat

## Usage
para correrlo:

1. En **_CMD_** ir a la direccion donde se instalo mongodb:
  ``` js
  cd  C:\Program Files\MongoDB\Server\3.4\bin>
  C:\Program Files\MongoDB\Server\3.4\bin> mongod
  ```

2. Correr en otro **_CMD_**:
  ``` js
  D:\Cursos\Chat> npm run dev
  ```

## To edit collection of mongoDB in shell:

1. Abrir el ejecutable **_mongo.exe_** que esta instalado normalmente por default en:
  ``` js
  C:\Program Files\MongoDB\Server\3.4\bin>
  ```
 
2. Poner esta linea para imprimir todas las bases de datos que tenemos en mongodb:
  ``` js
  > show dbs
  ```
  Y tendremos algo como:
  ``` js
  > show dbs
  admin          0.000GB
  chat-database  0.000GB
  local          0.000GB
  test           0.000GB
  ```

3. Ponemos esta linea para cambiar la base de datos de la consola:
  ``` js
  > use chat-database
  ```
  Y tendremos algo como:
  ``` js
  > use chat-database
  switched to db chat-database
  ```

4. Ahora ya podemos usar comandos como:
  ``` js
  > show collections
  chats
  ```

  O

  ``` js
  > db.chats.find()
  { "_id" : ObjectId("5c76dd33fbe33325c043222e"), "nick" : "3.189525735177682", "msg" : "Hola!", "created_at" : ISODate("2019-02-27T18:55:47.493Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76dd3bfbe33325c043222f"), "nick" : "4.132990616399267", "msg" : "bien o que?", "created_at" : ISODate("2019-02-27T18:55:55.775Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76e000986885a608d44c82"), "created_at" : ISODate("2019-02-27T19:07:44.303Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76e017538becd890a6eb1f"), "from" : "4.784120196296977", "message" : "aa", "created_at" : ISODate("2019-02-27T19:08:07.217Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76e8e3bbdad2c60c89b224"), "from" : "2.414039303064162", "message" : "a", "created_at" : ISODate("2019-02-27T19:45:39.918Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76e926bd529bebf452fa0f"), "from" : "5.005122557657261", "message" : "aa", "created_at" : ISODate("2019-02-27T19:46:46.625Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76e965c6318da2146a6cc9"), "from" : "1.9721235267254094", "message" : "a", "created_at" : ISODate("2019-02-27T19:47:49.694Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76e9c608da45be540060a7"), "from" : "8.579201579485542", "message" : "aa", "created_at" : ISODate("2019-02-27T19:49:26.164Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76e9d008da45be540060a8"), "from" : "8.579201579485542", "message" : "a", "created_at" : ISODate("2019-02-27T19:49:36.595Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76eac980aace54a4f7e2a6"), "from" : "3.437954136971028", "message" : "a", "created_at" : ISODate("2019-02-27T19:53:45.494Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76eae7123ad494bc0739c5"), "from" : "5.276228484978313", "message" : "e", "created_at" : ISODate("2019-02-27T19:54:15.905Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76eb15a72c1b20a9fe45c0"), "from" : "7.5011672472366335", "message" : "ex", "created_at" : ISODate("2019-02-27T19:55:01.306Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76eb418315178fac6b1d0b"), "from" : "3.7612889262875875", "message" : "a", "created_at" : ISODate("2019-02-27T19:55:45.568Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76eb478315178fac6b1d0c"), "from" : "1.777939698409426", "message" : "e", "created_at" : ISODate("2019-02-27T19:55:51.908Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76eb4f8315178fac6b1d0d"), "from" : "7.988782508901654", "message" : "a", "created_at" : ISODate("2019-02-27T19:55:59.562Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76ed47f8ac7a6e9468c445"), "from" : "8.184729514289403", "message" : "Hola", "created_at" : ISODate("2019-02-27T20:04:23.555Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76ed4df8ac7a6e9468c446"), "from" : "1.581431997828307", "message" : "si?", "created_at" : ISODate("2019-02-27T20:04:29.560Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76ed54f8ac7a6e9468c447"), "from" : "1.581431997828307", "message" : "aaa", "created_at" : ISODate("2019-02-27T20:04:36.096Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76ed69da80b34ba494f8c3"), "from" : "3.4829061767375924", "message" : "xD", "created_at" : ISODate("2019-02-27T20:04:57.315Z"), "__v" : 0 }
  { "_id" : ObjectId("5c76ed6eda80b34ba494f8c4"), "from" : "3.4829061767375924", "message" : "aaaas", "created_at" : ISODate("2019-02-27T20:05:02.670Z"), "__v" : 0 }
  Type "it" for more
  ```
  Or to remove all the documents in a collection:

  ``` js
  db.chats.remove({})
  ```