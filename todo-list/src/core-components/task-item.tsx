import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash.svg?react";
import PencilIcon from "../assets/icons/Pencil.svg?react";


export default function TaskItem() {
  return(
    <Card size="md" className="flex items-center gap-4">
      <InputCheckbox />
      <Text className="flex-1">🛒 Fazer compras da semana</Text>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={PencilIcon} variant="tertiary" />
      </div>
    </Card>
  );
}