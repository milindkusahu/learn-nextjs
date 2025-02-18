"use client";

import EditorJS from "@editorjs/editorjs";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";

const formSchema = z.object({
  title: z.string().min(3).max(50),
  content: z.string().min(25),
});

type FormSchemaValues = z.infer<typeof formSchema>;

export default function CreateBlogForm() {
  const form = useForm<FormSchemaValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (editorRef.current) return;

    const editor = new EditorJS({
      holder: "editorjs",
    });

    editorRef.current = editor;
  }, []);

  async function onSubmit(values: FormSchemaValues) {
    const { title } = values;
    const outputFromEditor = await editorRef?.current?.save();
    console.log(outputFromEditor?.blocks);
    console.log(title);
  }

  return (
    <main>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Type here..." {...field} />
                </FormControl>
                <FormDescription>This is your title for blog.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="bg-muted border border-gray-200 rounded-md">
            <div id="editorjs" />
          </div>

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </main>
  );
}
