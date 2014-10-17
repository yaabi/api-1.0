Coupons
====================

* [Get all coupons](#get-all-coupons)
* [Get coupon](#get-coupon)



Get all coupons
----------------

* `GET /coupons` will return all coupons.

```json
[
    {
        "id":1973177,
        "coupon_name":"Test Coupon 1",
        "description":"Test Coupon 1",
        "terms_and_conditions":"Test Coupon 1",
        "thumbnail":"http://yaabi.no/image.php?image=/1973177/1959608/c/1973177/5fc3181e832f.jpg",
        "discount_type":"percentage",
        "coupon_value":"10",
        "coupon_type":"standard",
        "usage_period":"forever",
        "published_at":null,
        "expiry_date":null,
        "no_of_coupons":"0",
        "active":true,
        "expired":false,
        "coupon_code":"A4ASDF4ASDF",
        "created_at":"2013-12-07T06:35:11+00:00",
        "updated_at":"2013-12-07T06:35:11+00:00"
    },
    {
        "id":1986745,
        "coupon_name":"Test Coupon 2",
        "description":"Test Coupon 2",
        "terms_and_conditions":"Test Coupon 2",
        "thumbnail":"http://yaabi.no/image.php?image=/1973177/1959608/c/1986745/42ebc069fefc.jpg",
        "discount_type":"percentage",
        "coupon_value":"10",
        "coupon_type":"standard",
        "usage_period":"forever",
        "published_at":null,
        "expiry_date":null,
        "no_of_coupons":"0",
        "active":true,
        "expired":false,
        "coupon_code":"ASDF54564ASD",
        "created_at":"2013-12-07T06:35:11+00:00",
        "updated_at":"2013-12-07T06:35:11+00:00"
    }
]
```


Get coupon
----------------

* `GET /coupons/1973177` will return specified coupon.

```json
{
        "id":1973177,
        "coupon_name":"Test Coupon 1",
        "description":"Test Coupon 1",
        "terms_and_conditions":"Test Coupon 1",
        "thumbnail":"http://yaabi.no/image.php?image=/1973177/1959608/c/1973177/5fc3181e832f.jpg",
        "discount_type":"percentage",
        "coupon_value":"10",
        "coupon_type":"standard",
        "usage_period":"forever",
        "published_at":null,
        "expiry_date":null,
        "no_of_coupons":"0",
        "active":true,
        "expired":false,
        "coupon_code":"A4ASDF4ASDF",
        "created_at":"2013-12-07T06:35:11+00:00",
        "updated_at":"2013-12-07T06:35:11+00:00"
}
```
