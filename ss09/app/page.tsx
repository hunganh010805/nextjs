import React from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
 
type SliderProps = React.ComponentProps<typeof Slider>


export default function page({ className, ...props }: SliderProps) {
  
  return (
    <div>
      Bai1
      <Button variant="destructive">Button</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <Button className='w-[70px] h-[30px] color'>Button</Button>
      <Button>Button</Button>
      <br />
      Bai2
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="number">Number</Label>
      <Input type="number" id="number" placeholder="Number" />
    </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
    Bai3
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <br />
    Bai4
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Lựa chọn môn học" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Môn học</SelectLabel>
          <SelectItem value="html">HTML</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
          <SelectItem value="java">JavaScript</SelectItem>
          <SelectItem value="react">ReactJS</SelectItem>
          <SelectItem value="next">Next.Js</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    Bai5 <br />
    <div>  Mã 6 chữ số
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    </div>
    <div>Mã 8 chữ số
    <InputOTP maxLength={8}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
      <InputOTPSlot index={5} />
      <InputOTPSlot index={6} />
      <InputOTPSlot index={7} />
      </InputOTPGroup>
    </InputOTP>
    </div>
    Bai6
    <div >
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      
      className={cn("w-[20%]", className)}
      {...props}
       
    />
    </div>    
    <div>Bai7
    
    </div>
</div>

  )
}
