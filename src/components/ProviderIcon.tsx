import {
  IconBrandBilibili,
  IconBrandNeteaseMusic,
  IconBrandSpotify,
  IconBrandYoutube,
  IconProps,
} from "@tabler/icons-react-native";
import React from "react";
import { Provider } from "../api";

export interface ProviderIconProps extends IconProps {
  provider: Provider;
}

const ProviderIcon: React.FC<ProviderIconProps> = ({ provider, ...props }) => {
  switch (provider) {
    case "netease":
      return <IconBrandNeteaseMusic color="#dd001b" {...props} />;
    case "bilibili":
      return <IconBrandBilibili color="#05a3d7" {...props} />;
    case "spotify":
      return <IconBrandSpotify color="#1dd05e" {...props} />;
    case "youtube":
      return <IconBrandYoutube color="#f70000" {...props} />;
  }
};

export default ProviderIcon;
