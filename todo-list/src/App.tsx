import Text from "./components/text";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/Trash.svg?react";
import CheckIcon from "./assets/icons/Check.svg?react";
import PencilIcon from "./assets/icons/Pencil.svg?react";
import PlusIcon from "./assets/icons/Plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/X.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-green-dark">       
          Hello world!
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
    </div>
  )
}
