import React from "react";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { useDefaultStyles } from "../hooks/providers/theme";

export interface ImageProps extends Omit<FastImageProps, "source"> {
  uri: string;
  headers?: {
    [key: string]: string;
  };
}

const Image: React.FC<ImageProps> = ({ uri, headers, style, ...props }) => {
  const defaultStyles = useDefaultStyles();

  return (
    <FastImage
      source={{
        // TODO(xylonx): use custom default image
        uri: uri || "",
        headers,
        // TODO(xylonx): choose suitable cache
        // cache: "cacheOnly",
      }}
      {...props}
      style={[style, defaultStyles.imageBackground]}
    />
  );
};

export default Image;
