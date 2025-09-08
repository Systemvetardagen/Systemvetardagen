interface GlobalConfig {
  apiBaseUrl: string;
}

const config: GlobalConfig = {
  apiBaseUrl:
    import.meta.env.PROD === true
      ? "http://localhost:8080/api/v1"
      : "https://mitt.systemvetardagen.se/api/vi",
};

export default config;
