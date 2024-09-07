"use client"
import Image from "next/image";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Login from "@/components/Auth/Login";
export default function Home() {
 
  return (
    <main className="h-[700px]">
      <Login/>
    </main>
  );
}
