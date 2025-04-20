"use client";
import { Button, Dialog, DialogBody } from "@/components";
import { useRef } from "react";

export default function Page() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div className="h-[800px] w-[393px] flex justify-center items-center">
      <div>
        <Button
          onClick={() => dialogRef.current?.showModal()}
          size="lg"
          variant="solid-fill"
        >
          ダイアログ表示
        </Button>

        <Dialog
          aria-labelledby="example-heading1"
          className="max-w-[393px]"
          ref={dialogRef}
        >
          <DialogBody>
            <h2 className="text-std-24B-150" id="example-heading1">
              ダイアログタイトル
            </h2>
            <p className="text-std-16N-170">
              ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
            </p>
            <div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
              <Button
                onClick={() => {
                  dialogRef.current?.close();
                }}
                size="lg"
                variant="solid-fill"
              >
                中断する
              </Button>
              <Button
                onClick={() => {
                  dialogRef.current?.close();
                }}
                size="lg"
                variant="text"
              >
                キャンセル
              </Button>
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  );
}
