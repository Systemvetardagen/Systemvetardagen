interface GlobalConfig {
  apiBaseUrl: string;
}

const config: GlobalConfig = {
  apiBaseUrl:
    import.meta.env.PROD === true
      ? "https://svd.disk.su.se/api/v1"
      : "https://svd.disk.su.se/api/v1",
};

export default config;
