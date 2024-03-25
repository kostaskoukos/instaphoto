import { LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createSupa } from "~/supabase";

export function name({ request: req }: LoaderFunctionArgs) {
  const [supa, headers] = createSupa(req);
}

export default function Index() {
  return (
    <>
      <h1>HELLO</h1>
      <Form action="">
        <input type="text" name="title" id="title" />
      </Form>
    </>
  );
}
