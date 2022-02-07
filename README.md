# shop-and-birds

`1.- npm install`

`2.- npm start`

`3.- Probar funciones a traves de un cliente http`

## Shop

```http
POST http://localhost:8000/api/test/shop
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `budget` | `number` | **Required**. Monica budget. |
| `keyboards` | `array` | **Required**. An array with the keyboard costs. |
| `drives` | `array` | **Required**. An array with the drivies costs. |

## Responses

Return JSON

```javascript
{
    "output": 250
}
```


## Birds

```http
POST http://localhost:8000/api/test/birds
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `population` | `array` | **Required**. The array list with the birds ids. Example [1, 4, 4 ,4, 5, 3] |

## Responses

Return JSON

```javascript
{
    "output": 4
}
```
