import { useEffect, useState } from "react"

export const useBreakpoint = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const mediaWatcher = window.matchMedia(
            '(max-width: 1279.9px)'
        );
            setIsMobileScreen(mediaWatcher.matches)

        function updateIsNarrowScreen(e) {
            setIsMobileScreen(mediaWatcher.matches);
      
        }
        mediaWatcher.addEventListener('change', updateIsNarrowScreen);

        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
        }
    }, [])
    return {isMobileScreen}
}