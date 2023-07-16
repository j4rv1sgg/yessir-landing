import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: "162601771757-9cqkkoljp072st1gukgs494tn1ak9cin.apps.googleusercontent.com",
      clientSecret: "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"
    })
  ]
})

export { handler as GET, handler as POST}