import Button from "../common/Button";

export default function AuthButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Button variant="secondary">Login</Button>
      <Button variant="primary">Sign Up</Button>
    </div>
  );
}
