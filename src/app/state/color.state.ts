'use server';
let color = 'blue';

export async function Color(colorParam?: string) {
    if(colorParam) {
        color = colorParam;
    }

    return color;
}