module.exports = {
  apps: [
    {
      name: "blog-server",
      script: "dist/main.js",
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      listen_timeout: 10000,
      kill_timeout: 5000,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
