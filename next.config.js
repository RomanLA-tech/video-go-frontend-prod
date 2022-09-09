/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.APP_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.API_APP_URL}/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination:
					`${process.env.AWS_S3_BUCKET_URL}/uploads/:path*`
			}
		];
	},
	images: {
		domains: [process.env.AWS_S3_BUCKET_DOMAIN],
		loader: 'akamai',
		path: process.env.AWS_S3_BUCKET_URL
	}
};

module.exports = nextConfig;
