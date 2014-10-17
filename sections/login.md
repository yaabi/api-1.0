Login contact
----------------

* `POST /login` will login contact.

```json
{
	"type":"phone",
	"phone":"8888888",
}
```

`200 ok` will be returned along with the JSON. `403 Forbidden` will be returned in case of invalid access.

```json
{
	"exists":TRUE
}
```
