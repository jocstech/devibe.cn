// dark mode composables
export const isDark = useDark();
export const toggleDark = useToggle(isDark);
export const preferredDark = usePreferredDark();

export const useOnTop = () => {
  return useState('onTop', () => true);
};
