// app/chat/page.js
import Link from "next/link";
import FeaturesPopup from "@/components/Features/features-popup";
import { Suspense } from 'react';
import Layout from '@/components/Chats/Layout';

export default function Page() {
  return (
    <>
      <Suspense>
        <main>
          <Layout />
        </main>
      </Suspense>
    </>
  );
}
