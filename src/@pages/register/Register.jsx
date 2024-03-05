import { Form } from "@components";

export default function Register() {
  return (
    <div>
      <p>Register page</p>
      <Form
        title="Register:"
        fields={{ name: "text" }}
        schema={{ name: "required" }}
      />
    </div>
  );
}
