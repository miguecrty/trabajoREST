const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/websocket",
        headers: [
          {
            key: "Connection",
            value: "Upgrade",
          },
          {
            key: "Upgrade",
            value: "websocket",
          },
        ],
      },
    ];
  },
};

export default nextConfig;