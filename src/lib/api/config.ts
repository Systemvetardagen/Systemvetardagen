interface GlobalConfig {
  apiBaseUrl: string;
}

const config: GlobalConfig = {
  apiBaseUrl:
    import.meta.env.PROD === true
      ? "https://mitt.systemvetardagen.se/api/vi"
      : "http://localhost:8080/api/v1",
};

export default config;
