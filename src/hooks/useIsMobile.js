import useMediaQuery from './useMediaQuery';

export const MOBILE_QUERY = '(max-width: 768px)';

export default function useIsMobile() {
  return useMediaQuery(MOBILE_QUERY);
}
