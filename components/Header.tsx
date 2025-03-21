import Image from "next/image"
import React from "react"
import Container from "./Container"
import Form from "next/form"
import Link from "next/link"
import CartIcon from "./CartIcon"
import { ShoppingBasket, User } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs"
import { SignInButton } from "@clerk/nextjs"
import { getMyOrders } from "@/sanity/helpers"

const Header = async () => {
  const user = await currentUser()
  let orders = null
  if (user?.id) {
    orders = await getMyOrders(user?.id)
  }

  return (
    <header className="w-full py-4 bg-white border-b border-gray-400 sticky top-0 z-50">
      <Container className="flex md:items-center justify-between gap-5 flex-col md:flex-row">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-24"
            priority
          />
        </Link>
        <Form action="/search" className="flex-1">
          <input
            type="text"
            name="query"
            placeholder="Search for products..."
            className="w-full border-2 border-gray-200 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-none"
          />
        </Form>
        <div className="flex items-center gap-5">
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
              >
                <ShoppingBasket className="text-darkBlue text-2xl w-6 h-6" />
                <div className="flex flex-col">
                  <p className="text-xs">
                    <span className="font-semibold">
                      {orders && orders?.length > 0 ? orders?.length : 0}
                    </span>{" "}
                    items
                  </p>
                  <p className="font-semibold">Orders</p>
                </div>
              </Link>
            </SignedIn>
            {user ? (
              <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                <UserButton />
                <div className="hidden md:inline-flex flex-col">
                  <p className="text-xs">Welcome Back</p>
                  <p className="font-semibold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                  <User className="w-6 h-6 text-darkBlue" />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
