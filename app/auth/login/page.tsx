import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInTab from "./_components/signin-form";
import SignUpTab from "./_components/signup-form";

const LoginPage = () => {
  return (
    <Tabs
      defaultValue="signin"
      className="mx-auto w-full max-w-md my-6 px-4 flex flex-col gap-4"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          </CardHeader>

          <CardContent>
            <SignInTab />
          </CardContent>

          <CardFooter className="grid grid-cols-2 gap-3">
            <p>social button</p>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          </CardHeader>

          <CardContent>
            <SignUpTab />
          </CardContent>

          <CardFooter className="grid grid-cols-2 gap-3">
            <p>social button</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;
