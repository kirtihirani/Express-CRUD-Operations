Five Basic APIs on User model:
1)Get all users
2)get a single user
3)Add a user
4)Update a user
5)delete a user

URLs:
1)localhost:8080/user/api/users      GET
2)localhost:8080/user/api/users/:id  GET
3)localhost:8080/user/api/users      POST
4)localhost:8080/user/api/users/:id  PUT
5)localhost:8080/user/api/users/:id  DELETE

Request Body:
{
name:String
email:String
password:String
role:String
}

Validations:
Name should be atleast 3 characters long.
Password should be atleast 4 characters long.
Role must be selected from Team Lead,Manager,Scrum master.

Five Basic APIs on Book model:
1)Get all books
2)get a single book
3)Add a book
4)Update a book
5)delete a book

URLs:
1)localhost:8080/book/api/books      GET
2)localhost:8080/book/api/books/:id  GET
3)localhost:8080/book/api/books      POST
4)localhost:8080/book/api/books/:id  PUT
5)localhost:8080/book/api/books/:id  DELETE

Request Body:
{
name:String
author:String
publisher:String
cost:String
}
