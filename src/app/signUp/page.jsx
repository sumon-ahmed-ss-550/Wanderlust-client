"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: newData.name, // required
      email: newData.email, // required
      password: newData.password, // required
      image: newData.image,
    });

    if (data) {
      redirect("/signIn");
    }

    console.log({ data, error });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-150 p-10 outline outline-[#eeeeeeee]">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          {/* Full Name  */}
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" className="rounded-none" />
            <FieldError />
          </TextField>

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
            <Label>Email</Label>
            <Input placeholder="john@example.com" className="rounded-none" />
            <FieldError />
          </TextField>

          {/* Image */}
          <TextField name="image" type="url">
            <Label>Image url</Label>
            <Input
              placeholder="https://www.exaple.com"
              className="rounded-none"
            />
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
            <Input placeholder="Enter your password" className="rounded-none" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div>
            <Button type="submit" className="rounded-none w-full bg-[#15A1BF]">
              Create Account
            </Button>
          </div>

          <div className="flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-[#6C696D]">Or sign up with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div>
            <Button
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
              Sign Up With Google
            </Button>

            <div className="text-center mt-6">
              Already have an account?{" "}
              <Link
                href={`/logIn`}
                className="text-[#15A1BF] text-[18px] font-bold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
