import { useMedia } from "@dwarvesf/react-hooks";

export const useIsMdScreenSize = () => {
  return useMedia(["(min-width: 768px)"], [true], false);
};
