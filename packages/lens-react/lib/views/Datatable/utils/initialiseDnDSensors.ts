import {
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

const initialiseDnDSensors = () => {
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  return sensors;
};
initialiseDnDSensors.displayName = "initialiseDnDSensors";

export { initialiseDnDSensors };
