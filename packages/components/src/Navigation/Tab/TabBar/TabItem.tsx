import { useCallback, useState } from 'react';

import { type GetProps } from 'tamagui';

import { ActionList, type IActionListSection } from '../../../ActionList';
import { Icon } from '../../../Icon';
import { Stack, XStack } from '../../../Stack';
import { Text } from '../../../Text';

import type { IICON_NAMES } from '../../../Icon';
import type { Animated, StyleProp, ViewStyle } from 'react-native';

interface ITabItemProps {
  icon?: IICON_NAMES;
  label?: string;
  selected?: boolean;
  tabBarStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  actionList?: IActionListSection[];
}

export function TabItem(props: ITabItemProps & GetProps<typeof Stack>) {
  const { icon, label, selected, tabBarStyle, actionList, ...rest } = props;
  const [menuHoverVisible, setMenuHoverVisible] = useState(false);
  const [isShowPopover, setPopoverStatus] = useState(false);
  const handleOpenChange = useCallback((isOpen: boolean) => {
    setMenuHoverVisible(isOpen);
    setPopoverStatus(isOpen);
  }, []);
  return (
    <XStack
      alignItems="center"
      py="$1.5"
      justifyContent={actionList ? 'space-between' : undefined}
      $gtMd={{
        flexDirection: 'row',
        px: '$2',
        bg: selected ? '$bgActive' : undefined,
        borderRadius: '$2',
      }}
      style={tabBarStyle as ViewStyle}
      onHoverIn={() => setMenuHoverVisible(true)}
      onHoverOut={() => !isShowPopover && setMenuHoverVisible(false)}
      {...rest}
    >
      <XStack>
        {icon && (
          <Icon
            flexShrink={0}
            name={icon}
            color={selected ? '$iconActive' : '$iconSubdued'}
            size="$7"
            $gtMd={{
              size: '$5',
            }}
          />
        )}
        {label && (
          <Text
            numberOfLines={1}
            mt="$0.5"
            variant="$headingXxs"
            color={selected ? '$text' : '$textSubdued'}
            $gtMd={{
              mt: '$0',
              ml: '$2',
              color: '$text',
              variant: '$bodyMd',
            }}
            userSelect="none"
          >
            {label}
          </Text>
        )}
      </XStack>
      {actionList && (
        <ActionList
          title="Action List"
          placement="right-start"
          onOpenChange={handleOpenChange}
          renderTrigger={
            menuHoverVisible && (
              <Stack
                alignSelf="flex-end"
                pressStyle={{
                  borderRadius: '$full',
                  backgroundColor: '$bgActive',
                }}
              >
                <Icon size="$5" name="DotHorOutline" />
              </Stack>
            )
          }
          sections={actionList}
        />
      )}
    </XStack>
  );
}
