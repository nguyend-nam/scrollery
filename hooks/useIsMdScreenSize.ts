import { useMedia } from "@dwarvesf/react-hooks";

export const useIsMdScreenSize = () => {
  return useMedia(["(max-width: 768px)"], [false], true);
};
