'use client'

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/lib/store';

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}
