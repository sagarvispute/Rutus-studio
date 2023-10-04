/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/uploads/projects/**',
            },
        ],
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: '/robots.txt',
                destination: '/api/robots',
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png|webp)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=9999999999, must-revalidate',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
