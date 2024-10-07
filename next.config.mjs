import withPWA from "next-pwa";

const nextConfig = {
  // Your Next.js configuration here
};

export default withPWA({
  dest: "public",
  register: true, // ensures that the service worker is registered
  skipWaiting: true, // tells the new service worker to activate as soon as it's available
})(nextConfig);
