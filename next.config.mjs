/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // This allows production builds to complete even if there are lint errors
        ignoreDuringBuilds: true,
    },
    typescript: {
        // This allows production builds to complete even if there are type errors
        ignoreBuildErrors: true,
    },
};

export default nextConfig;