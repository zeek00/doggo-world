import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/public/', '/components/', '/data/', '/types/'],
        },
        sitemap: `${process.env.PROD_URL}sitemap.xml`,
    }
}

