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
    const respData = await resp.json();
    if(resp.ok && respData.token){
        const response = NextResponse.json(respData);
        response.cookies.set('token', respData.token, {
            httpOnly: true,
            path: '/',
    });
        return response;
    }
    return NextResponse.json(respData, {status: resp.status})
    } catch (error) {
        return NextResponse.json({message: 'login error(server)'}, {status: 500})
    }
}