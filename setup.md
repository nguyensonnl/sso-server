### Check version

node -v
npm -v

### Setup

- npm init -y

- npm i --save-exact

1. dotenv
2. nodemon
3. body-parser
4. cookie-parser
5. express
6. jsonwebtoken
7. bcryptjs
8. cors

9. ejs
10. mysql2
11. sequelize
12. sequelize-cli

**babel compiler**

- `"type": "module"`

- Install babel
- npm i --save-exact @babel/core @babel/node @babel/preset-env
- Create file .babelrc

### Database

1 - n: Khóa ngoại thuộc về n  
1 user -> 1 role  
1 role -> n user

n - n: Tạo ra 1 bảng trung gian
1 role -> n permission
1 permission -> 1 role

npx sequelize-cli model:generate --name User --attributes email:string,password:string,username:string,phone:string,address:string,phone:string,roleId:integer

npx sequelize-cli model:generate --name Role --attributes name:string,description:string
npx sequelize-cli model:generate --name Permission --attributes url:string,description:string
npx sequelize-cli model:generate --name permissionRole --attributes permissionId:integer,roleId:integer

npx sequelize-cli db:migrate
