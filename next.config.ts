
/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.thedogapi.com',
                port: '',
                pathname: '**',
            }
        ]
    }
}

module.exports = nextConfig