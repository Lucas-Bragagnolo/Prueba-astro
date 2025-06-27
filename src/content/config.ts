import { defineCollection, z } from 'astro:content'
// z -> zod schema validator


const productos = defineCollection( {
    schema: z.object({
        marca: z.string(),
        modelo: z.string(),
        imagen: z.string(),
        descripcion: z.string(),
        precio: z.number(),
        buy: z.object({
            argentina: z.string(),
            latam: z.string(),
            usa: z.string()
        })
    }) 
})

export const collections = { productos }