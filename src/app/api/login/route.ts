import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest){
    try {
        const data = await req.json();

        const resp = await fetch('https://api.redseam.redberryinternship.ge/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        }
    });

    const respData = await resp.json();
    if(!resp.ok){
        return NextResponse.json(respData, {status: resp.status})
    }

    if(respData.token){
        const response = NextResponse.json(respData);
        response.cookies.set('token', respData.token, {
            httpOnly: true,
            path: '/',
    });
        return response;
    }
    return NextResponse.json(respData, {status: resp.status})

    } catch (error) {
        return NextResponse.json({message: 'network error occurred or the API is unreachable'}, {status: 500})
    }
}