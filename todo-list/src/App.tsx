import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash.svg?react";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-green-dark">       
          Hello world!
        </Text>
      </div>

      <div className="flex gap-1">
        <TrashIcon />
      </div>
    </div>
  )
}
