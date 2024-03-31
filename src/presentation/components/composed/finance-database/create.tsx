import { Button } from "../../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog"

export function CreateFinance() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent />
    </Dialog>
  )
}
