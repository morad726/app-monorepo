import { useTheme } from '@tamagui/core';

import platformEnv from '@onekeyhq/shared/src/platformEnv';

import type { VariableVal } from '@tamagui/core';
import type { ThemeKeys } from '@tamagui/web/src/types';

const getValue = (
  theme: ReturnType<typeof useTheme>,
  key: ThemeKeys,
  fallback?: VariableVal,
): VariableVal => {
  // avoid re-renders
  // https://tamagui.dev/docs/core/use-theme
  const value = platformEnv.isNative
    ? theme?.[key]?.val
    : (theme?.[key]?.get() as VariableVal);
  return value || fallback || '';
};

function useThemeValue<T extends ThemeKeys[] | ThemeKeys>(
  colorSymbol: T,
  fallback?: VariableVal,
): T extends ThemeKeys ? VariableVal : VariableVal[];
function useThemeValue(
  colorSymbol: ThemeKeys | ThemeKeys[],
  fallback?: VariableVal,
): VariableVal | VariableVal[] {
  const theme = useTheme();
  if (Array.isArray(colorSymbol)) {
    return colorSymbol.map((c) => getValue(theme, c, fallback));
  }
  return getValue(theme, colorSymbol, fallback);
}

export default useThemeValue;