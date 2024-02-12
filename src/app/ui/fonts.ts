import { Barlow_Condensed, Bellefair, Barlow } from 'next/font/google';


export const bellefair = Bellefair({
    weight: ['400', '400'],
    subsets: ['latin'],
    variable: '--ff-seriff',
})

export const barlow_condensed = Barlow_Condensed({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--ff-sans-cond',
})


export const barlow = Barlow({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--ff-sans-normal'
})


// How the fonts were set up as global variables in the tutorial
/*
:root {
    --ff-serif: "Bellefair", serif;
    --ff-sans-cond: "Barlow Condensed", sans-serif;
    --ff-sans-normal: "Barlow", sans-serif;
}
*/