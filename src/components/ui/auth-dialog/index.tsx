import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useAuth } from "@/hooks/hooksHeader/useAuth";

interface AuthDialogProps {
  buttonText?: string;
  initialMode?: "login" | "signup";
}

const AuthDialog = ({
  buttonText = "Login",
  initialMode = "login",
}: AuthDialogProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);

  const { login, signup } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (mode === "login") {
      const result = login(formData.email, formData.password);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => {
          setOpen(false);
          setFormData({ email: "", password: "", name: "" });
        }, 1000);
      } else {
        setError(result.message);
      }
    } else {
      if (!formData.name) {
        setError("Name is required");
        return;
      }
      const result = signup(formData.email, formData.password, formData.name);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => {
          setMode("login");
          setFormData({ ...formData, password: "" });
          setSuccess("");
        }, 1500);
      } else {
        setError(result.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex max-sm:w-5/11 items-center gap-2 px-4 py-4 h-9.5 shadow-none rounded-sm sm:rounded-md bg-mainLight text-white hover:bg-main transition-colors text-base font-medium">
          <LogIn size={18} />
          <span className="md:inline">{buttonText}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md border-3 border-main">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-main text-center">
            {mode === "login" ? "Login" : "Sign Up"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
              required
              minLength={6}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-600 text-sm bg-green-50 p-2 rounded">
              {success}
            </div>
          )}

          <Button
            type="submit"
            className="w-full text-white py-5 rounded-md transition-colors font-medium cursor-pointer"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          {mode === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setMode("signup");
                  setError("");
                  setSuccess("");
                }}
                className="text-main hover:underline font-medium cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setMode("login");
                  setError("");
                  setSuccess("");
                }}
                className="text-main hover:underline font-medium cursor-pointer"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
