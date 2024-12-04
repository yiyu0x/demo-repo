# Run environment

```
docker-compose up
```

# Test API Endpoint

- POST data

```
curl -X POST http://localhost:3000/itinerary \
-H "Content-Type: application/json" \
-d '{
  "name": "Statue of Liberty",
  "review_stars": 4.8,
  "suggested_time": "2 hours",
  "price": "$25",
  "ai_generated": false,
  "image": "https://example.com/statue.jpg"
}'
```

```
curl -X POST http://localhost:3000/itinerary \
-H "Content-Type: application/json" \
-d '{
  "name": "USC",
  "review_stars": 5.0,
  "suggested_time": "3 hours",
  "price": "$90",
  "ai_generated": false,
  "image": "https://example.com/statue.jpg"
}'
```

- GET data

```
curl http://localhost:3000/itinerary
```

- GET data by ID

```
curl http://localhost:3000/itinerary/6750d1b535f9e13ecd7d71b0
```
