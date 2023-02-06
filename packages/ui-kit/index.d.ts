declare module "@lingualeo-clone-client/ui-kit" {
  interface ThemeProviderProps {
    children: React.ReactNode;
  }

  export function ThemeProvider(props: ThemeProviderProps): React.ReactElement;
}
