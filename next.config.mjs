/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
    },
    logging: {
        fetches: {
            fullUrl: true,
        }
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
