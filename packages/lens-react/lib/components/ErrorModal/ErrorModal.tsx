// import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@lens/base/components/ui/dialog";
import { Button } from "@lens/base/components/ui/button";

interface ErrorModalProps {
  title: string;
  description: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  errorModalCallback?: () => void;
}

export function ErrorModal({
  open,
  title,
  description,
  setOpen,
  errorModalCallback,
}: ErrorModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg p-6 rounded-2xl shadow-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <DialogDescription>{description}</DialogDescription>

        <DialogFooter className="mt-6">
          <Button
            onClick={() => {
              if (errorModalCallback) errorModalCallback();
              setOpen(false);
            }}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
