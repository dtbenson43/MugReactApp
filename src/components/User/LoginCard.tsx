// import * as React from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";
// // import { useUser } from "../UserProvider/useUser";

// interface LoginCardProps {
//   thin?: boolean;
//   className?: string;
//   noHeader?: boolean;
//   closeDialog?: () => void;
// }

// const LoginCard: React.FC<LoginCardProps> = ({
//   thin,
//   noHeader,
//   className,
//   closeDialog,
// }) => {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   // const { login, isLoading } = useUser();

//   const handleToastSuccessFail = (success: boolean) => {
//     if (success && closeDialog) closeDialog();
//     return success ? "Logged in!" : "Incorrect email/password.";
//   };

//   const handleLogin = () => {
//     if (isLoading) return;

//     toast.promise(
//       login({
//         email: email,
//         password: password,
//       }),
//       {
//         loading: "Logging you in...",
//         success: () => handleToastSuccessFail(true),
//         error: () => handleToastSuccessFail(false),
//       }
//     );
//   };

//   return (
//     <Card className={cn("w-[350px]", className)}>
//       <CardHeader>
//         {!noHeader && (
//           <>
//             <CardTitle>User Login</CardTitle>
//             <CardDescription>
//               Login with your email and password.
//             </CardDescription>
//           </>
//         )}
//       </CardHeader>
//       <CardContent
//         className={`${
//           thin ? "w-5/6 mx-auto border border-transparent border-l-black" : ""
//         }`}
//       >
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Email</Label>
//               <Input
//                 disabled={isLoading}
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Password</Label>
//               <Input
//                 disabled={isLoading}
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter
//         className={`flex justify-between ${
//           thin
//             ? "mb-6 pb-0 w-5/6 mx-auto border border-transparent border-l-black"
//             : ""
//         }`}
//       >
//         {closeDialog ? (
//           <Button variant="outline" onClick={closeDialog}>
//             Cancel
//           </Button>
//         ) : (
//           <div></div>
//         )}
//         <Button disabled={isLoading} onClick={handleLogin}>
//           Login
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default LoginCard;
