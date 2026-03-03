"use client";

import Script from "next/script";
import { useEffect } from "react";

const EMBED_STYLE: React.CSSProperties = {
  background: "#FFF",
  border: 0,
  borderRadius: "3px",
  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
  margin: "1px",
  maxWidth: "540px",
  minWidth: "326px",
  padding: 0,
  width: "calc(100% - 2px)",
};

export default function InstagramGrid() {
  // Re-process embeds when component mounts
  useEffect(() => {
    (window as any).instgrm?.Embeds?.process?.();
  }, []);

  const posts = [
    "https://www.instagram.com/reel/DUtF_TvCOEl/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/DSDjIAYCACW/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/DSavsOlCFeX/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/DVWfszjiACT/?utm_source=ig_embed&utm_campaign=loading",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {posts.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={EMBED_STYLE}
        >
          {/* Optional: you can omit the giant placeholder HTML.
              Instagram's script will render the embed from the permalink. */}
        </blockquote>
      ))}

      <Script
        async
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => (window as any).instgrm?.Embeds?.process?.()}
      />
    </div>
  );
}