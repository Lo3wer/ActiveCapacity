export async function GET() {
    const results = [
        {
            "id": "123",
            "name": "ARC Gym",
            "currentOccupancy": 50,
            "totalCapacity": 80,
            "location": {
                "street": "6000 Student Union Blvd",
                "city": "Vancouver, BC",
                "postal": "V6T 1Z1",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "UBC Recreation",
            "hours": "06:30-22:00",
            "link": "https://www.recreation.ubc.ca/",
            "type": "GYM",
            "isOpen": true
        },
        {
            "id": "124",
            "name": "BirdCoop",
            "currentOccupancy": 60,
            "totalCapacity": 80,
            "location": {
                "street": "6000 Student Union Blvd",
                "city": "Vancouver, BC",
                "postal": "V6T 1Z1",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "UBC Recreation",
            "hours": "06:30-22:00",
            "link": "https://www.recreation.ubc.ca/",
            "type": "GYM",
            "isOpen": false
        }
    ];

    return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
    });
}
