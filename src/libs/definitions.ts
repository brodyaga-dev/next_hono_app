import { DateTime } from "next-auth/providers/kakao";

export type User = {
  id: string
  name: string
  email: string
  gender: string
  createdAt: DateTime

};