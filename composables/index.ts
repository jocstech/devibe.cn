// dark mode composables
export const isDark = createSharedComposable(useDark);
export const toggleDark = useToggle(isDark);
export const preferredDark = usePreferredDark();
