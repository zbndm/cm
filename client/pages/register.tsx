import { useRouter } from 'next/router'
import { Button, Input, Text, Label } from '@/components/ui'

export default function Register() {
  const router = useRouter()

  return (
    <div className="h-screen grid place-items-center">
      <div className="w-[384px] border border-slate-200 p-4 rounded-xl">
        <Text.H2 className="mb-8">Create Account</Text.H2>
        <div className="grid gap-5">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="johndoe@mail.com" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*******" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input type="password" id="confirmPassword" placeholder="*******" />
          </div>
          <Button>Sign Up</Button>
          <Button variant="outline" onClick={() => router.push('/login')}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  )
}
