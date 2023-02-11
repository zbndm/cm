import { useRouter } from 'next/router'
import { Button, Input, Text, Label } from '@/components/ui'

export default function Login() {
  const router = useRouter()

  return (
    <div className="h-screen grid place-items-center">
      <div className="w-[384px] border border-slate-200 p-4 rounded-xl">
        <Text.H2 className="mb-8">Login</Text.H2>
        <div className="grid gap-4">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="johndoe@mail.com" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*******" />
          </div>
          <Button>Log In</Button>
          <Button variant="outline" onClick={() => router.push('/register')}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}
