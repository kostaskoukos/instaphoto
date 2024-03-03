import { Form } from "@remix-run/react";

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
