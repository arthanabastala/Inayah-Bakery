import React from 'react';

export interface ProductVariant {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Base price (starts from)
  category: string;
  imageUrl: string;
  isPopular?: boolean;
  spicinessLevel?: number; // 0-3
  variants?: ProductVariant[]; // Optional variants
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatarUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  isError?: boolean;
}