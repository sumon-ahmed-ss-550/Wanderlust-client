"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const handleGoogleButton = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newForm = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: newForm.email,
      password: newForm.password,
      rememberMe: true,
    });

    if (data) {
      redirect("/");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-150">
        <div className="text-center mb-6">
          <h2 className="font-bold text-[43px]">Welcome Back</h2>
          <p className="font-normal text-[20px] text-[#6C696D]">
            Resume your adventure with Wanderlust
          </p>
        </div>
        <div className="p-10 outline outline-[#eeeeeeee]">
          <Form className="flex w-96 flex-col gap-4 mb-2" onSubmit={onSubmit}>
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email Address</Label>
              <Input placeholder="john@example.com" className="rounded-none" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input
                placeholder="Enter your password"
                className="rounded-none"
              />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            {/* <div>
              <Checkbox id="basic-terms">
                <Checkbox.Control className="border border-[#6C696D]">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label htmlFor="basic-terms">Remember me</Label>
                </Checkbox.Content>
              </Checkbox>
            </div> */}

            <div>
              <Button
                type="submit"
                className="rounded-none w-full bg-[#15A1BF]"
              >
                Log In
              </Button>
            </div>

            <div className="flex items-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-[#6C696D]">Or continue with</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </Form>

          <div>
            <Button
              onClick={handleGoogleButton}
              type="button"
              className="rounded-none w-full bg-transparent text-[#0C0B0B] border border-[#eeeeee]"
            >
              <Image
                src={`/assets/destinations/google.png`}
                width={20}
                height={20}
                alt="This is google icon"
                priority
              ></Image>
              Sign In With Google
            </Button>

            {/* <div className="text-center mt-6">
                Do not have an account?{" "}
                <Link
                  href={`/logIn`}
                  className="text-[#15A1BF] text-[18px] font-bold"
                >
                  Sign Up
                </Link>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
