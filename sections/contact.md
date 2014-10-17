Contact
====================

* [Verify contact](#verify-contact)
* [Get contact](#get-contact)
* [Create contact](#create-contact)
* [Update contact](#update-contact)
* [Add tags](#add-tags)
* [Subscribe](#subscribe)



Verify contact
----------------

* `POST /contact/verify` will verify contact.

```json
{
    "type":"phone",
	"phone":"8888888",
	"otp":"7wbX4d",
}
```

`200 ok` will be returned along with the JSON. `403 Forbidden` will be returned in case of invalid access.

```json
{
	"token":"7e7047b8bdc836ac7d15212c25f672f7bb8fe102"
}
```

Get  contact
----------------

* `GET /contact/2e851aa21cc0cee320b17df5aeebdaa` will return contact specified. `403 Forbidden` will be returned in case of invalid access.

```json
{
	"first_name":"Chris",
	"last_name":"Wagley",
	"gender":"Male",
	"date_of_birth":null,
	"relationship_status":"Single",
	"address":"#1,address",
	"city":"City",
	"zip":"11111111",
	"country":"Country",
	"email":"chris@email.com",
	"phone":"89562300",
	"designation":"Manager",
	"income":null,
	"created_at":"2013-12-07T06:35:11+00:00",
	"modified_at":"2013-12-07T06:35:11+00:00"
}
```
Create contact
----------------

* `POST /contact` will create a new contact to the account.

```json
{
	"first_name":"Chris",
	"last_name":"Wagley",
	"gender":"Male",
	"date_of_birth":null,
	"relationship_status":"Single",
	"address":"#1,address",
	"city":"City",
	"zip":"11111111",
	"country":"Country",
	"email":"chris@email.com",
	"phone":"89562300",
	"designation":"Manager",
	"income":null,
	"created_at":"2013-12-07T06:35:11+00:00",
	"modified_at":"2013-12-07T06:35:11+00:00"
}
```

`201 Created` will be returned along with the JSON of the contact ([Get contact](#get-contact)) if the record is added. `403 Forbidden` will be returned in case of invalid access.


Update contact
----------------

* `PUT /contact/2e851aa21cc0cee320b17df5aeebdaa` will update the contact for the parameters passed.

```json
{
	"first_name":"Chris",
	"last_name":"Wagley",
	"gender":"Male",
	"date_of_birth":null,
	"relationship_status":"Single",
	"address":"#1,address",
	"city":"City",
	"zip":"11111111",
	"country":"Country",
	"email":"chris@email.com",
	"phone":"89562300",
	"designation":"Manager",
	"income":null,
	"created_at":"2013-12-07T06:35:11+00:00",
	"modified_at":"2013-12-07T06:35:11+00:00"
}
```
`200 OK` will be returned along with the JSON of the contact ([Get contact](#get-contact)) if the record is updated. `403 Forbidden` will be returned in case of invalid access.


Add Tags
----------------

* `PUT /contact/tags/2e851aa21cc0cee320b17df5aeebdaa` will add tags to the contact for the parameters passed.

```json
{
	"tags":['tag1','tag2'],
}
```
`200 OK` will be returned if the record is updated. `403 Forbidden` will be returned in case of invalid access.

Subscribe
----------------

* `PUT /contact/subscribe/2e851aa21cc0cee320b17df5aeebdaa` will subscribe the contact.

```json
{
	"subscribe":TRUE,
}
```
`200 OK` will be returned if the record is updated. `403 Forbidden` will be returned in case of invalid access.

