import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LoginPage() {
  <Tabs defaultValue={"signin"} className={"max-auto w-full my-6 px-4"}>
    <TabsList>
      <TabsTrigger value={"signin"}>Sign In</TabsTrigger>
      <TabsTrigger value={"signUp"}>Sign Up</TabsTrigger>
    </TabsList>
  </Tabs>;
}
