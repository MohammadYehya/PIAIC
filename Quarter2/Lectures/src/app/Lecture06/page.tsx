'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast"

export const Toast = () => {
  const { toast } = useToast()

  return (
    <button className="bg-slate-200 rounded-xl border border-black"
      onClick={() => {
        toast({
          title: "TOAST!",
          description: "This is a Toast!",
          className: "bg-slate-300"
        })
      }}
    >
      Click Me!
    </button>
  )
}


export default () => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover over me!</TooltipTrigger>
          <TooltipContent className="bg-slate-100 border-black">
            <p>Wassup!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="">
        Change screen size to see collapsible bar on right
      </div>
      <Toast />
    </div>
  );
}