import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/unity/abyss-bond/Build/AbyssBondWebgl.data.br",
        headers: [
          { key: "Content-Type", value: "application/octet-stream" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
      {
        source: "/unity/abyss-bond/Build/AbyssBondWebgl.framework.js.br",
        headers: [
          { key: "Content-Type", value: "application/javascript" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
      {
        source: "/unity/abyss-bond/Build/AbyssBondWebgl.wasm.br",
        headers: [
          { key: "Content-Type", value: "application/wasm" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
    ];
  },
};

export default nextConfig;
