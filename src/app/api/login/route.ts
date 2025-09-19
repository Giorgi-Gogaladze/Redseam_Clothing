import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest){
    const data = await req.json();
    try {
        const resp = await fetch('https://api.redseam.redberryinternship.ge/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        }
    });
    if(!resp.ok){
        return NextResponse.json({message: 'invalid credentials for login'}, {status: resp.status})
    }

        
    } catch (error) {
        
    }
}