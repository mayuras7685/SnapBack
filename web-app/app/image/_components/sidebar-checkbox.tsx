"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSidebar } from "@/store/useSidebarStore";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

const item = [
  {
    id: "Pizza",
    label: "Pizza",
  },
  {
    id: "Momos",
    label: "Momos",
  },
  {
    id: "Pasta",
    label: "Pasta",
  },
  {
    id: "French-Fries",
    label: "French Fries",
  },
] as const;

const FormSchema = z.object({
  item: z.string().nonempty({
    message: "You have to select an item.",
  }),
});

export function SidebarCheckbox() {
  const { collapsed } = useSidebar((state) => state);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      item: "pasta",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast.success(
      <div>
        <p> You submitted the following values :</p>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>,
    );
  }

  return (
    <>
      {!collapsed && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="item"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel
                      className={cn(
                        "text-md dark:text-gray-70",
                        poppins.className,
                      )}
                    >
                      Food item:
                    </FormLabel>
                    <FormDescription className={"text-sm font-normal"}>
                      Select only 1 food item.
                    </FormDescription>
                  </div>
                  {item.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="item"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row item-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value === item.id}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? item.id : "");
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className={
                "bg-transparent dark:text-gray-200 hover:text-white text-gray-800 border"
              }
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
