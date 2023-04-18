import { MediaCard, VideoThumbnail } from "@shopify/polaris";
import React from "react";

function Video() {
  return (
    <MediaCard
      title="Trust Badges and iconsactivation and onboarding"
      primaryAction={{
        content: "Watch More",
        onAction: () => {},
      }}
      description={`How to setup Trust Badges and iconson Shopify using Iconito app ?`}
    >
      <VideoThumbnail
        videoLength={80}
        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
        onClick={() => console.log("clicked")}
      />
    </MediaCard>
  );
}

export default Video;
