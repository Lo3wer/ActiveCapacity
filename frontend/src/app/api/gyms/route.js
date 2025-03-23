export async function POST(request) {
    const { latitude, longitude } = await request.json();
    
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // })
    const gyms = [
        {
            name: "ARC",
            status: "Open",
            location: "UBC",
            capacity: 80,
            link: "https://www.recreation.ubc.ca/",
            street: "6000 Student Union Blvd",
            city: "Vancouver, BC",
            postal: "V6T 1Z1",
            hours: "6:30 am - 10 pm"
        },
        {
            name: "BirdCoop",
            status: "Closed",
            location: "UBC",
            capacity: 100,
            link: "https://www.recreation.ubc.ca/",
            street: "6000 Student Union Blvd",
            city: "Vancouver, BC",
            postal: "V6T 1Z1",
            hours: "6:30 am - 10 pm"
        }
    ];

    // This is the correct way to return JSON in Next.js App Router
    return new Response(JSON.stringify(gyms), {
        headers: { 'Content-Type': 'application/json' }
    });
}   