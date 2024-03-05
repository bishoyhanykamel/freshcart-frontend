import { Form } from "@components";

export default function Login() {
  const fields = {
    name: ["Enter your name", "text"],
    password: ["Enter your password", "password"],
  };

  return (
    <div>
      <Form title="Login" fields={fields} schema={{ test: "string" }} />
    </div>
  );
}
