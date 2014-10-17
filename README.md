YAABI API
====================
This RESTful API is an interface to the resources in YAABI e.g. contacts, coupons etc. 

If you are new to REST, you can understand the basics at http://en.wikipedia.org/wiki/REST. This API accepts and returns JSON format.

API key
----------------
With every request you'll need to pass the YAABI account's API key.

Making a request
----------------
All URLs (Base url) start with `http://api.yaabi.no/v1/`. You'll also need to include the `Content-Type` header and `User-Agent` to identify your app with every request.

**Here is a curl based example:**

```shell
curl -H 'API-KEY: YOUR API KEY' -H 'User-Agent: AppName (name@example.com)' http://api.yaabi.no/v1/contact/
```

API endpoints
----------------

* [Login](https://github.com/yaabi/api/blob/master/sections/login.md)
* [Contact](https://github.com/yaabi/api/blob/master/sections/contact.md)
* [Coupons](https://github.com/yaabi/api/blob/master/sections/coupons.md)


Things to remember
----------------
* **JSON Format**

  We support JSON for receiving and sending the data.

* **Identify your app**

  You must include the `User-Agent: AppName (name@example.com)` header with every request. If this header is not supplied, request will be returned with `400` response. 

* **Rate Limits**

  API calls are subject to rate limiting. Exceeding any rate limits will result in requests returning a status code of 429 (Too Many Requests). Rate limits are 100 requests per 10 second for the same account from the same IP.

* **Handling errors**

  Error codes 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, or 504 Gateway Timeout means an has occured at our end. Re-trying in some time should solve the problem.
