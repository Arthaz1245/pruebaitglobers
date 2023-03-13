import { useForm, ValidationError } from "@formspree/react";
import "./FormSubscribe.scss";
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvdowwv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        <span class="arrow">→</span>
      </button>
    </form>
  );
}
const FormSubscribe = () => {
  return <ContactForm />;
};

export default FormSubscribe;
