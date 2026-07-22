import {cookies} from 'next/headers'; import {SignJWT,jwtVerify} from 'jose'; import argon2 from 'argon2';
const key=()=>new TextEncoder().encode(process.env.AUTH_SECRET);
export async function authenticate(email:string,password:string){const configured=process.env.ADMIN_EMAIL?.toLowerCase();const hash=process.env.ADMIN_PASSWORD_HASH;if(!configured||!hash||!process.env.AUTH_SECRET)return false;return email.toLowerCase()===configured&&await argon2.verify(hash,password);}
export async function createSession(email:string){const token=await new SignJWT({email,role:'admin'}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('8h').sign(key());(await cookies()).set('session',token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:28800});}
export async function getSession(){try{const token=(await cookies()).get('session')?.value;if(!token||!process.env.AUTH_SECRET)return null;return (await jwtVerify(token,key())).payload;}catch{return null}}
export async function clearSession(){(await cookies()).delete('session')}
