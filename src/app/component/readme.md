
# SSR and CSR
- All the client components ('use client') will render first on the server (initial render) to have a better performance and help the SEO. After that, the client components will be hydrated on the client side. (like Counter.tsx)
- It's better to use as much as we can the server component as a tree and branches and the client component as leaves. (like Counter.tsx)
- The server component can render the client component. (Like Home.tsx)