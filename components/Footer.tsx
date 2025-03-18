import React from "react"
import Container from "./Container"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-lightBg text-sm">
      <Container className="py-5 flex items-center justify-between">
        <p className="text-gray-500">
          Copyright &copy; 2025{" "}
          <span className="text-darkBlue font-semibold">nextBD</span> all rights
          reserved.
        </p>
        <Image
          src={"/images/payment.png"}
          alt="payment icon"
          width={200}
          height={200}
          className="w-64 object-cover"
        />
      </Container>
    </footer>
  )
}

export default Footer
