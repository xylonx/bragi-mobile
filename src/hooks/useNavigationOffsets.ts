import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import useCurrentTrack from "./useCurrentTrack";

/**
 * A hook that returns the correct offset that should be applied to any Views
 * that are wrapped in a NavigationView, in order to account for overlays,
 * headers and bottom tabs.
 */
const useNavigationOffsets = (
  { includeOverlay = true } = {} as { includeOverlay?: boolean },
) => {
  const headerHeight = useHeaderHeight();
  const bottomBarHeight = useBottomTabBarHeight();
  const { track } = useCurrentTrack();

  return {
    top: headerHeight,
    bottom: (track && includeOverlay ? 68 : 0) + bottomBarHeight || 0,
  };
};

export default useNavigationOffsets;
