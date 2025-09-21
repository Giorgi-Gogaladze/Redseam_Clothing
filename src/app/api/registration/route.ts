import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    try {
        const response = await fetch('https://api.redseam.redberryinternship.ge/api/register', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json'
            },
        })

        const data = await response.json();
        if(response.ok && data.token){ 
            const res = NextResponse.json(data);
            res.cookies.set('token', data.token, {
                httpOnly: false,
                path: '/',
                maxAge: 7 * 24 * 60 * 60
            });
            return res;
        }
        return NextResponse.json(data, {status: response.status})
    } catch (error) {
        return NextResponse.json({message: 'server rrror'}, {status: 500})
    }
}