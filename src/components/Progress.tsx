import { Animated } from "react-native";
import { styled } from "styled-components/native";

export function getSeconds(seconds: number): string {
  "worklet";
  return Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
}

export function getMinutes(seconds: number): number {
  "worklet";
  return Math.floor(seconds / 60);
}

export function calculateProgressTranslation(
  position: number,
  reference: number,
  width: number,
) {
  "worklet";
  const completion = position / reference;

  // GUARD: Check whether the calculated number is valid and not infinite
  if (Number.isNaN(completion) || !Number.isFinite(completion)) {
    return 0;
  }

  const output = (1 - completion) * -1 * width;

  return output;
}

export interface ProgressTrackProps {
  opacity?: number;
  stroke?: number;
}

const ProgressTrack = styled(Animated.View)<ProgressTrackProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${props => (props.stroke ? props.stroke + "px" : "100%")};
  opacity: ${props => props.opacity || 1};
  border-radius: 99px;
`;

export default ProgressTrack;
