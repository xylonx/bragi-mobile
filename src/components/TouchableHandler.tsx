import React, { PropsWithChildren, useCallback } from "react";
import { Pressable } from "react-native";

export interface TouchableHandlerProps<T = string> {
  id: T;
  onPress: (id: T) => void;
  onLongPress?: (id: T) => void;
}

function TouchableHandler<T>({
  id,
  onPress,
  onLongPress,
  children,
}: PropsWithChildren<TouchableHandlerProps<T>>) {
  const handlePress = useCallback(() => onPress(id), [id, onPress]);

  const handleLongPress = useCallback(
    () => onLongPress && onLongPress(id),
    [id, onLongPress],
  );

  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
      {children}
    </Pressable>
  );
}

export default TouchableHandler;
