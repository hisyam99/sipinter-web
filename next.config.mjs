import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "@ducanh2912/next-pwa";

const withNextIntl = createNextIntlPlugin();

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/apis/:path*",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: ["github.com", "lh3.googleusercontent.com"],
  },
};

export default withNextIntl(withPWA(nextConfig));
