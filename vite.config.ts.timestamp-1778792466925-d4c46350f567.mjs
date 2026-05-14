// vite.config.ts
import { defineConfig } from "file:///app/webapp/node_modules/vite/dist/node/index.js";
import react from "file:///app/webapp/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///app/webapp/node_modules/pp-tagger/dist/index.js";
var __vite_injected_original_dirname = "/app/webapp";
var hmrKeepalive = {
  name: "hmr-ws-keepalive",
  configureServer(server) {
    let timer = null;
    const tick = () => {
      server.ws?.send({ type: "ping" });
      timer = setTimeout(tick, 5e3 + Math.floor(Math.random() * 4e3));
    };
    timer = setTimeout(tick, 5e3 + Math.floor(Math.random() * 4e3));
    server.httpServer?.on("close", () => {
      if (timer) clearTimeout(timer);
    });
  }
};
var vite_config_default = defineConfig(({ mode }) => ({
  plugins: [
    hmrKeepalive,
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
    hmr: {
      timeout: 7e3,
      overlay: false
      // Disables the error overlay if you only want console errors
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwL3dlYmFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2FwcC93ZWJhcHAvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2FwcC93ZWJhcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHtjb21wb25lbnRUYWdnZXJ9IGZyb20gXCJwcC10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmNvbnN0IGhtcktlZXBhbGl2ZSA9IHtcbiAgICBuYW1lOiAnaG1yLXdzLWtlZXBhbGl2ZScsXG4gICAgY29uZmlndXJlU2VydmVyKHNlcnZlcjogYW55KSB7XG4gICAgICAgIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbiAgICAgICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlcnZlci53cz8uc2VuZCh7dHlwZTogJ3BpbmcnfSk7XG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQodGljaywgNTAwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwMDApKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpY2ssIDUwMDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0MDAwKSk7XG4gICAgICAgIHNlcnZlci5odHRwU2VydmVyPy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHttb2RlfSkgPT4gKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGhtcktlZXBhbGl2ZSxcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBjb21wb25lbnRUYWdnZXIoKSxcbiAgICBdLmZpbHRlcihCb29sZWFuKSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICAgIHBvcnQ6IDUxNzMsXG4gICAgICAgIGFsbG93ZWRIb3N0czogdHJ1ZSxcbiAgICAgICAgaG1yOiB7XG4gICAgICAgICAgICB0aW1lb3V0OiA3MDAwLFxuICAgICAgICAgICAgb3ZlcmxheTogZmFsc2UgLy8gRGlzYWJsZXMgdGhlIGVycm9yIG92ZXJsYXkgaWYgeW91IG9ubHkgd2FudCBjb25zb2xlIGVycm9yc1xuICAgICAgICB9XG4gICAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbU4sU0FBUSxvQkFBbUI7QUFDOU8sT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFRLHVCQUFzQjtBQUg5QixJQUFNLG1DQUFtQztBQU16QyxJQUFNLGVBQWU7QUFBQSxFQUNqQixNQUFNO0FBQUEsRUFDTixnQkFBZ0IsUUFBYTtBQUN6QixRQUFJLFFBQThDO0FBQ2xELFVBQU0sT0FBTyxNQUFNO0FBQ2YsYUFBTyxJQUFJLEtBQUssRUFBQyxNQUFNLE9BQU0sQ0FBQztBQUM5QixjQUFRLFdBQVcsTUFBTSxNQUFPLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxHQUFJLENBQUM7QUFBQSxJQUNwRTtBQUNBLFlBQVEsV0FBVyxNQUFNLE1BQU8sS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLEdBQUksQ0FBQztBQUNoRSxXQUFPLFlBQVksR0FBRyxTQUFTLE1BQU07QUFDakMsVUFBSSxNQUFPLGNBQWEsS0FBSztBQUFBLElBQ2pDLENBQUM7QUFBQSxFQUNMO0FBQ0o7QUFFQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFDLEtBQUksT0FBTztBQUFBLEVBQ3JDLFNBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUNULGdCQUFnQjtBQUFBLEVBQ3BCLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3hDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsS0FBSztBQUFBLE1BQ0QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBO0FBQUEsSUFDYjtBQUFBLEVBQ0o7QUFDSixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
